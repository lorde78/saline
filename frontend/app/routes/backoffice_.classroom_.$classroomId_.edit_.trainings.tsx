import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import {NavLink} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Edit_Trainings() {
    useGlobalEffect()

    const [trainings, setTrainings] = useState([
        {
            id: 0,
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        }
    ])
    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Parcour"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    <NavLink to={"0"} className={"button"}>
                        Ajouter un parcour
                    </NavLink>
                    {
                        trainings.map((training, i) => {
                            return (
                                <Backoffice_training
                                    id={training.id}
                                    title={training.title}
                                    professor={training.professor}
                                    imgLink={training.imgLink}
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
