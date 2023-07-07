import Builder_block_button from "~/kits/builder_block_button";

export default function Builder_select_step() {
    return (
        <section className={"builder_step_container"}>
            <nav className={"builder_select_step_nav"}>
                <Builder_block_button icon={"ri-vidicon-line"} contents={"Vidéo"} />
                <Builder_block_button icon={"ri-file-edit-line"} contents={"Exercice"} />
                <Builder_block_button icon={"ri-award-line"} contents={"Examen"} />
            </nav>
        </section>
    )
}