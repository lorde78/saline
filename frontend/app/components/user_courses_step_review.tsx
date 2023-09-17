import Checkbox from "~/kits/checkbox";
import Builder_select_folder from "~/kits/builder_select_folder";
import {useState} from "react";

type Props = {
    step: any
    setValue: any
}
interface FileEntry {
    file: any;
    fileType: string;
    stepId?: number;
}
export default function User_courses_step_review({step, setValue}: Props) {
    const [filesData, setFilesData] = useState<FileEntry[]>([])
    const setFileType = () => {
        switch(step.data.fileType) {
            case 'PDF':
                return "application/pdf";

            case 'Video':
                return "video/mp4"

            default:
                return "application/pdf"
        }
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
                    fileType: "fileType",
                    stepId: 1
                },
            ]);
        }
    }

    return (
        <>
            <div className={"courses_content_container"}>
                <h3>Consigne</h3>
                <iframe src={step.data.reviewUrl} id={"preview_" + step.data.id} className={"course_preview_folder"}></iframe>
            </div>
            <div className={""}>
                <h3>Dépôt</h3>
                <Builder_select_folder
                    icon={"ri-file-2-line"}
                    folderType={setFileType()}
                    idType={step.data.fileType}
                    buttonMessage={"Sélectionner un fichier"}
                    setFileInfo={setFileInfo}
                    filesData={filesData}
                    fileType={"review"}
                    dbFile={""}
                />
            </div>
        </>
    )
}