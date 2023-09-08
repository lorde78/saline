import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import {NavLink, useLocation} from "@remix-run/react";
import Builder_creation from "~/components/builder_creation";
import { useGlobalEffect } from "~/helper/globalMiddleware";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Trainings_TrainingId() {
    useGlobalEffect()

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Créer un parcour"}/>
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    <Builder_creation creation_type={"training"} />
                </div>
            </section>
        </>
    )
}
