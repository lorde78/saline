import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Header_section_page from "~/kits/header_section_page";
import User_courses_step_exercise_bindlist from "~/components/user_courses_step_exercise_bindlist";
import User_courses_step_exercise_qcm from "~/components/user_courses_step_exercise_qcm";
import User_courses_step_video from "~/components/user_courses_step_video";
import User_courses_step_review from "~/components/user_courses_step_review";
import {useGlobalEffect} from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";
import builder from "~/styles/builder.css";
import {isLogged} from "~/helper/isLogged";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {signinContext} from "~/context/signinContext";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
        {rel: "stylesheet", href: builder}
    ]
}

interface Step {
    id: number;
    data: any;
    type: string;
    value: string;
}

export default function Courses_CourseId_StepId() {
    useGlobalEffect("user");

    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("")
    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(1)
    const getStepId = getIdFromUrl(0)

    const [step, setStep] = useState<Step | null>(null);
    const getCurrentCourse = useGetCurrentElement();

    const getCourse = async () => {
        const currentClassroom = await getCurrentCourse("lesson", getCurrentId);
        //@ts-ignore
        setStep(currentClassroom.steps[getStepId - 1]);
        setLoader(true);
    };

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

    type ResponsesType = {
        [stepId: number]: ResponseItem;
    }

    type AnswerStepsType = {
        userId: string;
        courseId: number;
        responses: ResponsesType;
    };

    const [answerSteps, setAnswerSteps] = useState<AnswerStepsType>({
        userId: "",
        courseId: 0,
        responses: {}
    });

    const setValue = (stepId: number, type: StepType, value: ResponseValue) => {
        let newAnswerSteps = {...answerSteps};
        newAnswerSteps.userId = currentUserId;
        newAnswerSteps.courseId = getCurrentId;
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
                newAnswerSteps.responses[stepId] = responseItem;
                break;
            default:
                console.error(`Unknown step type: ${type}`);
                break;
        }

        setAnswerSteps(newAnswerSteps);
    }

    useEffect(() => {
        if (answerSteps.userId != "") {
            console.log(answerSteps)
        }
    }, [answerSteps]);

    const typeStep = () => {
        switch (step?.type) {
            case "video":
                return (
                    <User_courses_step_video step={step} setValue={setValue}/>
                )
            case "exercise/qcm":
                return (
                    <User_courses_step_exercise_qcm step={step} setValue={setValue}/>
                )
            case "exercise/bind_list":
                return (
                    <User_courses_step_exercise_bindlist step={step} setValue={setValue}/>
                )
            case "review":
                return (
                    <User_courses_step_review step={step} setValue={setValue}/>
                )
        }
    }
    // @ts-ignore
    let title = step?.value.charAt(0).toUpperCase() + step?.value.slice(1);

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1} title={title || ""}/>
                    <main className={"max_width_container margin-top-20"}>
                        <div className={"main_section_container-flex max_width"}>
                            {typeStep()}
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