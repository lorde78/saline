import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import Backoffice_classroom from "~/components/backoffice_classroom";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";


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

    const [classrooms, setClassrooms] = useState([])
    const getAllClassrooms = useGetAllElements()

    useEffect(() => {
        getAllClassrooms("classroom").then(r => {
            if (!classrooms.length) {
                setClassrooms(r)
            }
        })
    }, [])

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Classes"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_classroom_preview_container max_width"}>
                    <NavLink to={"new"} className={"button"}>
                        Créer une classe
                    </NavLink>
                    {
                        classrooms.map((classroom, i) => {
                            return (
                                <Backoffice_classroom
                                    id={classroom.id}
                                    title={classroom.title}
                                    author={classroom.author}
                                    imgLink={classroom.bannerPicture}
                                    description={classroom.description}
                                    creation_type={"classroom"}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
