import {useEffect, useState} from "react";
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


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
        { rel: "stylesheet", href: builder }
    ]
}

interface Step {
    id: number;
    data: any;
    type: string;
    value: string;
}

export default function Classrooms_ClassroomId_Trainings_TrainingId_Courses_CourseId_StepId() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(1)
    const getStepId = getIdFromUrl(0)

    const [step, setStep] = useState<Step | null>(null);
    const getCurrentCourse = useGetCurrentElement();

    const getCourse = async () => {
        const currentClassroom = await getCurrentCourse("lesson", getCurrentId);
        //@ts-ignore
        setStep(currentClassroom.steps[getStepId-1]);
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


    const typeStep = () => {
        switch (step?.type) {
            case "video":
                return (
                    <User_courses_step_video step={step}/>
                )
            case "exercise/qcm":
                return (
                    <User_courses_step_exercise_qcm step={step}/>
                )
            case "exercise/bind_list":
                return (
                    <User_courses_step_exercise_bindlist step={step}/>
                )
            case "review":
                return (
                    <User_courses_step_review step={step}/>
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