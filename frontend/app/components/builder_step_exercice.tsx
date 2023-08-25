import Builder_qcm_step_exercice from "~/components/builder_qcm_step_exercice";
import Builder_bind_list_step_exercice from "~/components/builder_bind_list_step_exercice";

export default function Builder_step_exercice() {
    return (
        <section className={"builder_step_container"}>
            <Builder_qcm_step_exercice />
            {/*<Builder_bind_list_step_exercice />*/}
        </section>
    )
}