import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Header_section_page from "~/kits/header_section_page";
import User_preview_card_noimage from "~/components/user_preview_card_noimage";
import {useGlobalEffect} from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";
import {isLogged} from "~/helper/isLogged";
import {useNavigate} from "react-router-dom";
import {NavLink, useLocation} from "@remix-run/react";
import useGetProgress from "~/hook/useGetProgress";
import useStartProgress from "~/hook/useStartProgress";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {signinContext} from "~/context/signinContext";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Course {
    id: number;
    title: string;
    bannerPicture: string;
    description: string;
    author: {
        name: string,
        firstName: string
    },
    steps: any;
}

interface Step {
    id: number;
    data: any;
    type: string;
    value: string;
}

export default function Courses_CourseId() {
    useGlobalEffect()
    isLogged("user");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const getCurrentId = getIdFromUrl(0);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("")

    const [course, setCourse] = useState<Course | null>(null);
    const getCurrentCourse = useGetCurrentElement();

    const [progressCourse, setProgressCourse] = useState<any>();
    const getCurrentProgressCourse = useGetProgress();
    const [hasToStart, setHasToStart] = useState(false);
    const startProgress = useStartProgress();

    const getCourse = async () => {
        const currentClassroom = await getCurrentCourse("lesson", getCurrentId);
        const currentProgressCourse = await getCurrentProgressCourse("progressLesson", "lessonId", getCurrentId);
        //@ts-ignore
        setCourse(currentClassroom);
        setProgressCourse(currentProgressCourse);
        if (currentProgressCourse.length === 0) {
            setHasToStart(true);
        }
        setLoader(true);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const userId = await useGetCurrentUserId(signin);
                    setCurrentUserId(userId)
                    setLoader(true);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser()
    }, [signin])

    const [bannerHeight, setBannerHeight] = useState(400)

    useEffect(() => {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setBannerHeight(200)
            } else {
                setBannerHeight(400)
            }
        };

        getCourse()
    }, []);

    const startCourse = (e: any) => {
        e.preventDefault();

        let formData = {
            status: "En cours",
            urlEval: "",
            studentId: currentUserId,
            lessonId: getCurrentId
        }

        startProgress("progressLesson", formData);

        window.location.reload();
    }


    type StepType = 'video' | 'exercise/qcm' | 'exercise/bind_list' | 'review';

    type ResponseValue =
        | { watched: boolean }
        | Array<Array<{ value: boolean }>>
        | { [key: string]: string }
        | { reviewUrl: string };

    type ResponseItem = {
        stepId: number;
        type: StepType;
        response: ResponseValue;
    };

    type AnswerStepsType = {
        userId: number;
        courseId: number;
        responses: ResponseItem[];
    };

    const [answerSteps, setAnswerSteps] = useState<AnswerStepsType>({
        userId: 1,
        courseId: 1,
        responses: []
    });

    const setValue = (stepId: number, type: StepType, value: ResponseValue) => {
        let newAnswerSteps = {...answerSteps};
        const responseItem: ResponseItem = {
            stepId,
            type,
            response: value
        };

        switch (type) {
            case 'video':
            case 'exercise/qcm':
            case 'exercise/bind_list':
            case 'review':
                newAnswerSteps.responses.push(responseItem);
                break;
            default:
                console.error(`Unknown step type: ${type}`);
                break;
        }

        setAnswerSteps(newAnswerSteps);
    }


    // temporaire pour tester
    const data = {
        "userId": 1,
        "courseId": 1,
        "responses": [
            {
                "stepId": 1,
                "type": "video",
                "response": {
                    "watched": true
                }
            },
            {
                "stepId": 2,
                "type": "exercise/qcm",
                "response": [
                    [
                        {"value": true},
                        {"value": false}
                    ],
                    [
                        {"value": false},
                        {"value": true},
                        {"value": false}
                    ]
                ]
            },
            {
                "stepId": 3,
                "type": "exercise/bind_list",
                "response": {
                    "batterie": "corde",
                    "flute": "vent",
                    "guitare": "percussion"
                }
            },
            {
                "stepId": 4,
                "type": "review",
                "response": {
                    "reviewUrl": "http://localhost:3000//uploads/files/instructions/1694943653879-843288059-GOLDBRONN_GABRIEL_P2023.pdf"
                }
            }
        ]
    }
    useEffect(() => {
        if (answerSteps.responses.length === 0) {
            data.responses.forEach(response => {
                // @ts-ignore
                setValue(response.stepId, response.type, response.response);
            });
        }

    }, []);
    useEffect(() => {
        console.log(answerSteps)
    }, [answerSteps]);
    // temporaire pour tester

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1} title={course?.title || ""}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{height: bannerHeight}}>
                                <img src={course?.bannerPicture} alt={"bannière du cours"}/>
                            </div>
                            <p>{course?.description}</p>
                            {hasToStart ? (
                                <NavLink className="button" to={location.pathname} onClick={(e) => {
                                    startCourse(e)
                                }}>Démarrer ce Cours</NavLink>
                            ) : (
                                <></>
                            )}
                            <div className={"main_section_container-flex max_width"}>
                                {(course?.steps ?? []).length !== 0 ? (
                                    course?.steps.map((step: Step, i: number) => {
                                        return (
                                            <User_preview_card_noimage
                                                id={step.id}
                                                title={step.value}
                                                type={step.type}
                                                status={"A faire"}
                                                disable={hasToStart}
                                            />
                                        )
                                    })
                                ) : (
                                    <p>Aucune étape n'existe dans ce cours.</p>
                                )}
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    )
        ;
}