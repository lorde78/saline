import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import Backoffice_classroom from "~/components/backoffice_classroom";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalMiddleware";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Backoffice_Classroom() {
    useGlobalEffect()

    const [classrooms, setClassrooms] = useState([
        {
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        }
    ])
    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Classes"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_classroom_preview_container max_width"}>
                    <NavLink to={"0"} className={"button"}>
                        Ajouter une classe
                    </NavLink>
                    {
                        classrooms.map((classroom, i) => {
                            return (
                                <Backoffice_classroom
                                    id={i}
                                    title={classroom.title}
                                    professor={classroom.professor}
                                    imgLink={classroom.imgLink}
                                    description={classroom.description}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
