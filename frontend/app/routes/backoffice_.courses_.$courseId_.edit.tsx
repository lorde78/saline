import Builder_navigation from "~/components/builder_navigation";

import Builder_select_step from "~/components/builder_select_step";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import builder from "~/styles/builder.css";
import {useEffect, useState} from "react";
import Builder_step_exercice from "~/components/builder_step_exercice";
import Builder_step_video from "~/components/builder_step_video";
import Builder_step_review from "~/components/builder_step_review";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: builder}
    ]
}

export default function BackofficeTrainingsTrainingIdCourseId_EditStepId() {
    useGlobalEffect()

    const [courseData, setCoursesData] = useState([
        {
            id: 1,
            value: "étape 1",
            type: "",
            data: {}
        }
    ])
    const [stepSelected, setStepSelected] = useState(0)
    const [typeExercise, setTypeExercise] = useState([
        {value: "QCM", option: "qcm"},
        {value: "Liste à relier", option: "bind_list"}
    ])
    const [exerciseSelected, setExerciseSelected] = useState(0)
    const selectTypeStep = (value: string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].type = value
        if (value === "video") {
            newCourseData[stepSelected].data = {
                video: "",
                infoDescription: "",
                description: ""
            }
        } else if (value === "exercise/qcm") {
            newCourseData[stepSelected].data = [
                {
                    "question": "",
                    "multipleChoice": false,
                    "choice": [
                        {
                            "answer": "",
                            "goodAnswer": false
                        }
                    ]
                }
            ]
        } else if (value === "exercise/bind_list") {
            newCourseData[stepSelected].data = [{
                "bind1": "",
                "bind2": "",
            }]
        } else if (value === "review") {
            newCourseData[stepSelected].data = {}
        }
        setCoursesData(newCourseData)
    }

    useEffect(() => {
        console.log(courseData)
    }, [courseData])

    return (
        <>
            <Header_section_page title={"CourName"} numberUndoPage={2}/>
            <div className={"builder_container"}>
                <Builder_navigation
                    courseData={courseData}
                    setCoursesData={setCoursesData}
                    stepSelected={stepSelected}
                    setStepSelected={setStepSelected}
                    typeExercise={typeExercise}
                    exerciseSelected={exerciseSelected}
                    setExerciseSelected={setExerciseSelected}
                />
                {
                    courseData[stepSelected].type === "video" ?
                        <Builder_step_video
                            courseData={courseData}
                            setCoursesData={setCoursesData}
                            stepSelected={stepSelected}
                        />
                        :
                        courseData[stepSelected].type === "exercise/qcm" ?
                            <Builder_step_exercice
                                courseData={courseData}
                                setCoursesData={setCoursesData}
                                stepSelected={stepSelected}
                                type={"qcm"}
                            />
                            :
                            courseData[stepSelected].type === "exercise/bind_list" ?
                                <Builder_step_exercice
                                    courseData={courseData}
                                    setCoursesData={setCoursesData}
                                    stepSelected={stepSelected}
                                    type={"bind_list"}
                                />
                                :
                                courseData[stepSelected].type === "review" ?
                                    <Builder_step_review
                                        courseData={courseData}
                                        setCoursesData={setCoursesData}
                                        stepSelected={stepSelected}
                                    />
                                    :
                                    <Builder_select_step
                                        courseData={courseData}
                                        stepSelected={stepSelected}
                                        setValue={selectTypeStep}
                                    />
                }


            </div>
        </>
    )
        ;
}
