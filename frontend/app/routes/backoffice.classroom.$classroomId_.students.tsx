import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function BackofficeClassroomClassroomId_Students() {

    const [students, setStudents] = useState([
        {

        }
    ])
    return (
        <>
            <Header_section_page title={"élève"} />
            <div className={"backoffice_students_preview_container"}>
                {
                    students.map((student, i) => {
                        return (
                            <></>
                        )
                    })
                }
            </div>
        </>
    )
}
