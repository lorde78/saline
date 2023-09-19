import Checkbox from "~/kits/checkbox";
import Builder_select_folder from "~/kits/builder_select_folder";
import {useEffect, useState} from "react";
import useUploadFile from "~/hook/useUploadFile";
import useGetProgress from "~/hook/useGetProgress";
import useUpdateProgress from "~/hook/useUpdateProgress";
import editLink from "~/helper/editLink";
import {useNavigate} from "react-router-dom";
import Loader from "~/kits/loader";

type Props = {
    step: any;
    setValue: any;
    courseId: number;
}

interface FileEntry {
    file: any;
    fileType: string;
    stepId?: number;
}

export default function User_courses_step_review({step, setValue, courseId}: Props) {
    const uploadHook = useUploadFile();
    const navigate = useNavigate();
    const editPath = editLink(1)
    const [loader, setLoader] = useState(false);

    const updateProgress = useUpdateProgress();

    const [progressCourse, setProgressCourse] = useState<any>();
    const getCurrentProgressCourse = useGetProgress();

    const [filesData, setFilesData] = useState<FileEntry[]>([])
    const setFileType = () => {
        switch (step.data.fileType) {
            case 'PDF':
                return "application/pdf";

            case 'Video':
                return "video/mp4"

            default:
                return "application/pdf"
        }
    }

    const getCurrentProgress = async () => {
        const currentProgressCourse = await getCurrentProgressCourse("progressLesson", "lessonId", courseId);
        setProgressCourse(currentProgressCourse[0]);
        setLoader(true);
    }

    useEffect(() => {
        getCurrentProgress();
    }, []);

    const setFileInfo = (value: any) => {
        const fileType = "review";

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
                    stepId: step.id + 1
                },
            ]);
        }
    }

    let fileUrl: any = null;

    const submit = async (e: any) => {
        e.preventDefault();
        const fileUpload = new FormData();

        // @ts-ignore
        fileUpload.append("fileToUpload", filesData[0].file);

        try {
            fileUrl = await uploadHook(fileUpload, "review")
        } catch (err) {
            console.log("Erreur lors de l'envoi du fichier :", err);
        }

        let formData: any = {
            "status": "Validation",
            "urlEval": fileUrl
        }

        updateProgress(formData, progressCourse.id);

        // navigate(editPath);
    }

    return (
        <>
            {loader ? (
                    <>
                        <div className={"courses_content_container"}>
                            <h3>Consigne</h3>
                            <iframe src={step.data.reviewUrl} id={"preview_" + step.data.id}
                                    className={"course_preview_folder"}></iframe>
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
                                dbFile={progressCourse.urlEval}
                            />
                        </div>
                        <div>
                            <button className="button" onClick={(e) => submit(e)}>Soumettre l'évaluation</button>
                        </div>
                    </>
                ) :
                (
                    <Loader/>
                )
            }
        </>
    )
}