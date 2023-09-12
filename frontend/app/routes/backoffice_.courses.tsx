import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import {NavLink, useLocation} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";

interface Course {
    id: number,
    title: string,
    description: string,
    numberSteps: number,
    steps: JSON,
    difficultyLevel: string,
    nbViews: number,
    nbCompleted: number,
    userId: number,
    bannerPicture: string
}

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Courses() {
    useGlobalEffect()

    const [courses, setCourses] = useState([])
    const getAllCourses = useGetAllElements()

    useEffect(() => {
        getAllCourses("lesson").then(r => {
            if (!courses.length) {
                setCourses(r)
            }
        })
    }, [])

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Cours"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    <div className={"button_header"}>
                        <NavLink to={"new"} className={"button"}>
                            Créer un cours
                        </NavLink>
                    </div>
                    {(courses ?? []).length != 0 ?
                        (courses.map((course, i) => {
                            return (
                                <Backoffice_edit_training
                                    id={course.id}
                                    title={course.title}
                                    author={course.author}
                                    imgLink={course.bannerPicture}
                                    description={course.description}
                                    showButton={true}
                                    creation_type={"lesson"}
                                />
                            )
                        })) : (
                            <p>Aucun cours n'existe pour le moment.</p>
                        )
                    }
                </div>
            </section>
        </>
    )
}
