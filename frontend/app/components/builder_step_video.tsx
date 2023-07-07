import Builder_select_video from "~/kits/builder_select_video";
import Builder_navigation_step_video from "~/components/builder_navigation_step_video";

export default function Builder_step_video() {
    return (
        <section className={"builder_step_container"}>
            <Builder_select_video />
            <Builder_navigation_step_video />
        </section>
    )
}