import Builder_select_video from "~/kits/builder_select_video";
import Builder_navigation_step_video from "~/components/builder_navigation_step_video";
import {useEffect} from "react";

type Props = {
    courseData: any;
    setCoursesData: any;
    stepSelected: number;
    filesData: any;
    setFilesData: any;
}
export default function Builder_step_video({courseData, setCoursesData, stepSelected, filesData, setFilesData}: Props) {
    const setDescription = (value:string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.description = value
        setCoursesData(newCourseData)
    }

    const setInfoDescription = (value:string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.infoDescription.text = value
        setCoursesData(newCourseData)
    }

    const setFileInfo = (value:any) => {
        const fileType = "documentations";

        const existingIndex = filesData.findIndex((entry: { fileType: string; }) => entry.fileType === fileType);

        if (existingIndex !== -1) {
            setFilesData((prevData: any) => {
                const newData = [...prevData];
                newData[existingIndex] = {
                    ...newData[existingIndex],
                    file: value,
                };
                return newData;
            });
        } else {
            setFilesData((prevData: any) => [
                ...prevData,
                {
                    file: value,
                    fileType: fileType,
                    stepId: stepSelected+1
                },
            ]);
        }
    }

    return (
        <section className={"builder_step_container"}>
            <Builder_select_video
                courseData={courseData}
                stepSelected={stepSelected}
                setCoursesData={setCoursesData}
            />
            <Builder_navigation_step_video
                description={courseData[stepSelected].data.description}
                setDescription={setDescription}
                infoDescription={courseData[stepSelected].data.infoDescription}
                setInfoDescription={setInfoDescription}
                setFileInfo={setFileInfo}
                filesData={filesData}
            />
        </section>
    )
}