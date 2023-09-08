import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import {NavLink, useLocation} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";


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

    const [courses, setCourses] = useState([
        {
            id: 0,
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        },
        {
            id: 0,
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        },
        {
            id: 0,
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        },
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
            <Header_section_page numberUndoPage={1}  title={"Cours"}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    <div className={"button_header"}>
                        <NavLink className={"button"} to={'0'}>
                            Créer un cours
                        </NavLink>
                    </div>
                    {
                        courses.map((course, i) => {
                            return (
                                <Backoffice_edit_training
                                    id={course.id}
                                    title={course.title}
                                    professor={course.professor}
                                    imgLink={course.imgLink}
                                    description={course.description}
                                    showButton={true}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
