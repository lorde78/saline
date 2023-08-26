import Builder_block_button from "~/kits/builder_block_button";
interface Props {
    setValue: any
}
export default function Builder_select_step({setValue}: Props) {
    return (
        <section className={"builder_step_container"}>
            <nav className={"builder_select_step_nav"}>
                <Builder_block_button icon={"ri-vidicon-line"} contents={"Vidéo"} setValue={setValue} props={"video"} />
                <Builder_block_button icon={"ri-file-edit-line"} contents={"Exercice"} setValue={setValue} props={"exercise/qcm"} />
                <Builder_block_button icon={"ri-award-line"} contents={"Examen"} setValue={setValue} props={"review"} />
            </nav>
        </section>
    )
}