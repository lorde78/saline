import Builder_select_folder from "~/kits/builder_select_folder";
import Select from "~/kits/select";
import {useContext, useEffect, useState} from "react";
import {registerContext} from "~/context/registerContext";

type Props = {
    courseData: any;
    setCoursesData: any;
    stepSelected: number;
    filesData: any;
    setFilesData: any;
}
export default function Builder_step_review({courseData, setCoursesData, stepSelected,filesData,setFilesData}: Props) {
    const setFileInfo = (value:any) => {
        const fileType = "instructions";

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

    const [fileType, setFileType] = useState("pdf")
    const [fileTypeData, setFileTypeData] = useState([
        {value: "PDF", option: "PDF"},
        {value: "Video", option: "Video"}
    ])
    const [fileTypeSelected, setFileTypeSelected] = useState(0)

    const changeFileType = (value: string, id: number) => {
        setFileTypeSelected(id)

        let newCourseData = [...courseData];
        newCourseData[stepSelected].data.fileType = value.toLowerCase()

        setCoursesData(newCourseData)
    }

    useEffect(() => {
        switch(fileTypeSelected) {
            case 0:
                setFileType("pdf")
                break;

            case 1:
                setFileType("video")
                break;

            default:
                setFileType("pdf")
                break;
        }
    },[fileTypeSelected])

    useEffect(() => {
        let newCourseData = [...courseData];
        newCourseData[stepSelected].data.fileType = "PDF";

        setCoursesData(newCourseData);
    }, []);

    return (
        <section className={"builder_step_container"}>
            <Builder_select_folder
                icon={"ri-file-2-line"}
                folderType={"application/pdf"}
                idType={"pdf"}
                buttonMessage={"Sélectionner le fichier de consignes"}
                setFileInfo={setFileInfo}
                filesData={filesData}
                fileType={"instructions"}
                dbFile={courseData[stepSelected].data.reviewUrl}/>
            <h2>Type de fichier attendu</h2>
            <Select
                optionSelected={fileTypeSelected}
                setOptionSelected={setFileTypeSelected}
                contents={fileTypeData}
                setValue={changeFileType}
                propsSetValue={""}
            />
        </section>
    )
}