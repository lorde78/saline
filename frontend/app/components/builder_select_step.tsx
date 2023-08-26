import Builder_block_button from "~/kits/builder_block_button";

interface Props {
    courseData: any
    stepSelected: number
    setValue: any
}

export default function Builder_select_step({setValue, courseData, stepSelected}: Props) {
    const reviewOff = () => {
        if (stepSelected < courseData.length - 1) {
            return true
        } else {
            return false
        }
    }
    return (
        <section className={"builder_step_container"}>
            <nav className={"builder_select_step_nav"}>
                <Builder_block_button
                    icon={"ri-vidicon-line"}
                    contents={"Vidéo"}
                    setValue={setValue}
                    props={"video"}
                    off={false}
                />
                <Builder_block_button
                    icon={"ri-file-edit-line"}
                    contents={"Exercice"}
                    setValue={setValue}
                    props={"exercise/qcm"}
                    off={false}
                />

                <Builder_block_button
                    icon={"ri-award-line"}
                    contents={"Examen"}
                    setValue={setValue}
                    props={"review"}
                    off={reviewOff()}
                />
            </nav>
        </section>
    )
}