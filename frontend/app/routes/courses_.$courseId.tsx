import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import training from "~/styles/backofficeTraining.css";
import {NavLink} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_training from "~/components/user_training";
import Header_section_page from "~/kits/header_section_page";
import User_courses from "~/components/user_courses";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom},
        {rel: 'stylesheet', href: training},
    ]
}

export default function Courses_CourseId() {


    const [course, setCourse] = useState({
        id: 1,
        title: "course 2",
        data: [
            {
                id: 1,
                value: "étape 1",
                type: "video",
                professor: "Jean Paul",
                status: "Terminé",
                data: {
                    description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
                    infoDescription: "",
                    video: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
                    professors: [
                        {
                            id: 0,
                            name: "Jean Paul",
                        },
                        {
                            id: 1,
                            name: "Jean Damien",
                        }
                    ],
                    comments: [
                        {
                            id: 0,
                        }
                    ],
                }
            },
            {
                id: 2,
                value: "étape 2",
                type: "exercise/qcm",
                professor: "Jean Paul",
                status: "En cours",
                data: [
                    {
                        question: 'Question 1',
                        multipleChoice: true,
                        choice: [
                            {answer: 'Réponse 1', goodAnswer: true},
                            {answer: 'Réponse 2', goodAnswer: true},
                            {answer: 'Réponse 3', goodAnswer: false},
                        ]
                    },
                    {
                        question: 'Question 2',
                        multipleChoice: false,
                        choice: [
                            {answer: 'Réponse 1', goodAnswer: true},
                            {answer: 'Réponse 2', goodAnswer: false},
                        ]
                    }
                ]
            },
            {
                id: 3,
                value: "étape 3",
                type: "exercise/bind_list",
                professor: "Jean Paul",
                status: "Non commencé",
                data: [
                    {
                        bind1: "1",
                        bind2: "2",
                    },
                    {
                        bind1: "3",
                        bind2: "4",
                    },
                    {
                        bind1: "5",
                        bind2: "6",
                    },
                ]
            },
            {
                id: 4,
                value: "étape 4",
                type: "review",
                professor: "Jean Paul",
                status: "Non commencé",
                data: {}
            }
        ]
    })

    return (
        <>
            <Header/>
            <Header_section_page numberUndoPage={1} title={course.title}/>
            <main className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    {
                        course.data.map((course, i) => {
                            return (
                                <User_courses
                                    id={course.id}
                                    title={course.value}
                                    professor={course.professor}
                                    status={course.status}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}