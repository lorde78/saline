import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import {NavLink} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import useGetCurrentElement from "~/hook/useGetCurrentElement";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Trainings() {
    useGlobalEffect()

    const [trainings, setTrainings] = useState([])
    const getAllCourses = useGetAllElements()

    useEffect(() => {
        getAllCourses("training").then(r => {
            if (!trainings.length) {
                setTrainings(r)
            }
        })
    }, [])

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Parcours"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    <NavLink to={"new"} className={"button"}>
                        Ajouter un parcours
                    </NavLink>
                    {
                        trainings.map((training, i) => {
                            return (
                                <Backoffice_training
                                    id={training.id}
                                    title={training.title}
                                    author={training.author}
                                    imgLink={training.bannerPicture}
                                    description={training.description}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
