import React, { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import builder from "~/styles/builder.css";
import Header_section_page from "~/kits/header_section_page";
import Builder_navigation from "~/components/builder_navigation";
import Builder_select_step from "~/components/builder_select_step";
import Builder_step_exercice from "~/components/builder_step_exercice";
import Builder_step_video from "~/components/builder_step_video";
import Builder_step_review from "~/components/builder_step_review";
import { useGlobalEffect } from "~/helper/globalHelper";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";

type LoaderData = {
    relId: string | null;
    relType: string | null;
};

type CourseStep = {
    id: number;
    value: string;
    type: string;
    data: any;
};

type CourseData = CourseStep[];

type ExerciseStep = {
    question: string;
    multipleChoice: boolean;
    choice: {
        answer: string;
        goodAnswer: boolean;
    }[];
};

type BindListStep = {
    bind1: string;
    bind2: string;
};

type LessonData = {
    id: number;
    value: string;
    type: string;
    data: ExerciseStep[] | BindListStep[] | Record<string, any>;
};

export function links() {
    return [
        { rel: "stylesheet", href: resetStyles },
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: input },
        { rel: "stylesheet", href: builder },
    ];
}

export default function BackofficeTrainingsTrainingIdCourseId_EditStepId() {
    useGlobalEffect();
    const getCurrentId = getIdFromUrl(1);
    const [loader, setLoader] = useState(false);

    const [filesData,setFilesData] = useState([])

    const [courseName, setCourseName] = useState<string>(""); // Ajouter un type de chaîne
    const [courseData, setCoursesData] = useState<CourseData>([
        {
            id: 1,
            value: "étape 1",
            type: "",
            data: {},
        },
    ]);
    const getCurrentCourse = useGetCurrentElement();

    const getCourse = async () => {
        const currentCourse = await getCurrentCourse("lesson", getCurrentId);
        if(currentCourse.steps) {
            //@ts-ignore
            setCoursesData(currentCourse.steps);
        }
        //@ts-ignore
        setCourseName(currentCourse.title);
        setLoader(true);
    };

    useEffect(() => {
        getCourse();
    }, []);

    const [stepSelected, setStepSelected] = useState<number>(0);
    const [typeExercise, setTypeExercise] = useState<{ value: string; option: string }[]>([
        { value: "QCM", option: "qcm" },
        { value: "Liste à relier", option: "bind_list" },
    ]);

    const [exerciseSelected, setExerciseSelected] = useState<number>(0);
    const selectTypeStep = (value: string) => {
        let newCourseData = [...courseData];
        newCourseData[stepSelected].type = value;
        if (value === "video") {
            newCourseData[stepSelected].data = {
                video: "",
                infoDescription: {
                    text: "",
                    url: ""
                },
                description: "",
            };
        } else if (value === "exercise/qcm") {
            newCourseData[stepSelected].data = [
                {
                    question: "",
                    multipleChoice: false,
                    choice: [
                        {
                            answer: "",
                            goodAnswer: false,
                        },
                    ],
                },
            ];
        } else if (value === "exercise/bind_list") {
            newCourseData[stepSelected].data = [
                {
                    bind1: "",
                    bind2: "",
                },
            ];
        } else if (value === "review") {
            newCourseData[stepSelected].data = {
                reviewUrl: "",
                fileType: ""
            };
        }
        setCoursesData(newCourseData);
    };

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page title={courseName} numberUndoPage={2} edit={true} logout={true} />
                    <div className={"builder_container"}>
                        <Builder_navigation
                            courseData={courseData}
                            setCoursesData={setCoursesData}
                            stepSelected={stepSelected}
                            setStepSelected={setStepSelected}
                            typeExercise={typeExercise}
                            exerciseSelected={exerciseSelected}
                            setExerciseSelected={setExerciseSelected}
                            filesData={filesData}
                        />
                        {courseData[stepSelected].type === "video" ? (
                            <Builder_step_video
                                courseData={courseData}
                                setCoursesData={setCoursesData}
                                stepSelected={stepSelected}
                                filesData={filesData}
                                setFilesData={setFilesData}
                            />
                        ) : courseData[stepSelected].type === "exercise/qcm" ? (
                            <Builder_step_exercice
                                courseData={courseData}
                                setCoursesData={setCoursesData}
                                stepSelected={stepSelected}
                                type={"qcm"}
                            />
                        ) : courseData[stepSelected].type === "exercise/bind_list" ? (
                            <Builder_step_exercice
                                courseData={courseData}
                                setCoursesData={setCoursesData}
                                stepSelected={stepSelected}
                                type={"bind_list"}
                            />
                        ) : courseData[stepSelected].type === "review" ? (
                            <Builder_step_review
                                courseData={courseData}
                                setCoursesData={setCoursesData}
                                stepSelected={stepSelected}
                                filesData={filesData}
                                setFilesData={setFilesData}
                            />
                        ) : (
                            <Builder_select_step
                                courseData={courseData}
                                stepSelected={stepSelected}
                                setValue={selectTypeStep}
                            />
                        )}
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}
