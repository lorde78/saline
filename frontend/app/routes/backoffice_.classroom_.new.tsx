import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import Builder_creation from "~/components/builder_creation";
import { useGlobalEffect } from "~/helper/globalHelper";
import {useEffect} from "react";
import {useLocation} from "@remix-run/react";
import useCreateClassroom from "~/hook/useCreateBuilderElement";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Backoffice_Classroom_New() {
    useGlobalEffect()

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Créer une classe"}/>
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    <Builder_creation creation_type={"classroom"} />
                </div>
            </section>
        </>
    )
}