import type {V2_MetaFunction} from "@remix-run/node";
import Builder_navigation from "~/components/builder_navigation";
import Builder_step_review from "~/components/builder_step_review";

import Builder_select_step from "~/components/builder_select_step";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import builder from "~/styles/builder.css";
import Builder_step_video from "~/components/builder_step_video";
import Builder_step_exercice from "~/components/builder_step_exercice";
import Builder_creation from "~/components/builder_creation";
import Header_section_page from "~/kits/header_section_page";


export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: builder}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Edit_Trainings_TrainingId_Edit_CourseId() {
    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Créer un cour"}/>
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    <Builder_creation creation_type={"builder"} />
                </div>
            </section>
        </>
    )
}
