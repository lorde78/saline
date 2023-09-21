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
import useGetProgress from "~/hook/useGetProgress";
import useStartProgress from "~/hook/useStartProgress";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {NavLink} from "@remix-run/react";


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
    progressLesson: any;
}

interface Step {
    id: number;
    data: any;
    type: string;
    value: string;
}

export default function Classrooms_ClassroomId_Trainings_TrainingId_Courses_CourseId() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0)
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("");

    const [course, setCourse] = useState<Course | null>(null);
    const getCurrentCourse = useGetCurrentElement();

    const [progressCourse, setProgressCourse] = useState<any>();
    const getCurrentProgressCourse = useGetProgress();
    const [hasToStart,setHasToStart] = useState(false);
    const startProgress = useStartProgress();

    const getCourse = async () => {
        const currentClassroom = await getCurrentCourse("lesson", getCurrentId);
        const currentProgressCourse = await getCurrentProgressCourse("progressLesson","lessonId",getCurrentId);
        //@ts-ignore
        setCourse(currentClassroom);
        setProgressCourse(currentProgressCourse[0]);
        if (currentProgressCourse.length === 0) {
            setHasToStart(true);
        }
        setLoader(true);
    };

    const [bannerHeight, setBannerHeight] = useState(400)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const userId = await useGetCurrentUserId(signin);
                    setCurrentUserId(userId)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser()
    }, [signin])

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

    const startCourse = (e:any) => {
        e.preventDefault();

        let formData = {
            status: "En cours",
            urlEval: "",
            studentId: currentUserId,
            lessonId: getCurrentId
        }

        startProgress("progressLesson",formData);

        window.location.reload();
    }

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={2} title={course?.title || ""} status={progressCourse ? progressCourse.status : "A faire"}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{height: bannerHeight}}>
                                <img src={course?.bannerPicture} alt={"bannière du cours"}/>
                            </div>
                            <p>{course?.description}</p>
                            {hasToStart ? (
                                <NavLink className="button" to={location.pathname} onClick={(e) => {startCourse(e)}}>Démarrer ce Cours</NavLink>
                            ) : (
                                <></>
                            )}
                            <div className={"main_section_container-flex max_width"}>
                                {(course?.steps ?? []).length !== 0 ? (
                                    course?.steps.map((step: Step, i: number) => {
                                        let stepsStatus = course.progressLesson.filter((progress:any) => progress.lessonId === getCurrentId);
                                        let status = "A faire";
                                        if (stepsStatus && stepsStatus[0].progress.responses[step.id]) {
                                            switch (stepsStatus[0].progress.responses[step.id].type) {
                                                case 'video':
                                                case 'exercise/qcm':
                                                case 'exercise/bind_list':
                                                    if (stepsStatus[0].progress.responses[step.id].success) {
                                                        status = "Terminé";
                                                    }
                                                    break;
                                            }
                                        }
                                        if (step.type === "review") {
                                            status = stepsStatus[0].status;
                                        }
                                        return (
                                            <User_preview_card_noimage
                                                id={step.id}
                                                title={step.value}
                                                type={step.type}
                                                status={status}
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