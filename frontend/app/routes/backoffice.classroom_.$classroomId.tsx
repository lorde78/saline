import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Backoffice_edit_classroom from "~/components/backoffice_edit_classroom";
import Header_section_page from "~/kits/header_section_page";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function BackofficeClassroomClassroomId() {

    return (
            <div className={"backoffice_classroom_id_container "}>
                <Backoffice_edit_classroom/>
            </div>
    )
}