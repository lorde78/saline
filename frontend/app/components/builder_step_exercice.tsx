import Builder_qcm_step_exercice from "~/components/builder_qcm_step_exercice";
import Builder_bind_list_step_exercice from "~/components/builder_bind_list_step_exercice";

type Props = {
    type: string
}
export default function Builder_step_exercice({type}: Props) {
    return (
        <section className={"builder_step_container"}>
            {
                type === "qcm" ?
                    <Builder_qcm_step_exercice/> :
                    type === "bind_list" ?
                        <Builder_bind_list_step_exercice/> :
                        <></>
            }
        </section>
    )
}