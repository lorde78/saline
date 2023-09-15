import Builder_select_folder from "~/kits/builder_select_folder";

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
        </section>
    )
}