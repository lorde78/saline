import Builder_select_folder from "~/kits/builder_select_folder";

export default function Builder_step_review() {
    return (
        <section className={"builder_step_container"}>
            <Builder_select_folder icon={"ri-file-2-line"} folderType={"application/pdf"} idType={"pdf"} buttonMessage={"Choisi un fichier pour ton énoncé"} />
        </section>
    )
}