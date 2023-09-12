import Builder_select_folder from "~/kits/builder_select_folder";

type Props = {
    courseData: any
    setCoursesData: any
    stepSelected: number
}
export default function Builder_step_review({courseData, setCoursesData, stepSelected}: Props) {
    return (
        <section className={"builder_step_container"}>
            <Builder_select_folder
                icon={"ri-file-2-line"}
                folderType={"application/pdf"}
                idType={"pdf"}
                buttonMessage={"Sélectionner le fichier de consignes"}
            />
        </section>
    )
}