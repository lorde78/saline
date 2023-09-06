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
import User_course_video_nav from "~/components/user_course_video_nav";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom},
        {rel: 'stylesheet', href: training},
    ]
}

export default function Courses_CourseId_StepId() {


    const [step, setStep] = useState({
            id: 1,
            value: "étape 1",
            type: "video",
            professor: "Jean Paul",
            status: "Terminé",
            data:
                {
                description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
                information: {
                    infoDescription: "On sait depuis longtemps que ",
                    document: ""
                },
                video: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
                professors: [
                    {
                        id: 0,
                        img: "https://www.w3schools.com/howto/img_avatar.png",
                        name: "Jean Paul",
                        roles: ["Professeur", "Administrateur"],
                        instruments: ["Guitare"]
                    },
                    {
                        id: 1,
                        img: "https://www.w3schools.com/howto/img_avatar.png",
                        name: "Jean Damien",
                        roles: ["Professeur"],
                        instruments: ["Guitare", "Basse"],
                    }
                ],
                comments: [
                    {
                        id: 0,
                    }
                ],
            }
        }
        // {
        //     id: 2,
        //     value: "étape 2",
        //     type: "exercise/qcm",
        //     professor: "Jean Paul",
        //     status: "En cours",
        //     data: [
        //         {
        //             question: 'Question 1',
        //             multipleChoice: true,
        //             choice: [
        //                 {answer: 'Réponse 1', goodAnswer: true},
        //                 {answer: 'Réponse 2', goodAnswer: true},
        //                 {answer: 'Réponse 3', goodAnswer: false},
        //             ]
        //         },
        //         {
        //             question: 'Question 2',
        //             multipleChoice: false,
        //             choice: [
        //                 {answer: 'Réponse 1', goodAnswer: true},
        //                 {answer: 'Réponse 2', goodAnswer: false},
        //             ]
        //         }
        //     ]
        // }

        // {
        //     id: 3,
        //     value: "étape 3",
        //     type: "exercise/bind_list",
        //     professor: "Jean Paul",
        //     status: "Non commencé",
        //     data: [
        //         {
        //             bind1: "1",
        //             bind2: "2",
        //         },
        //         {
        //             bind1: "3",
        //             bind2: "4",
        //         },
        //         {
        //             bind1: "5",
        //             bind2: "6",
        //         },
        //     ]
        // }

        // {
        //     id: 4,
        //     value: "étape 4",
        //     type: "review",
        //     professor: "Jean Paul",
        //     status: "Non commencé",
        //     data: {}
        // }
    )

    const typeStep = () => {
        switch (step.type) {
            case "video":
                return (
                    <div className={"backoffice_training_preview_container max_width"}>
                        <div className={"backoffice_training_preview_video"}>
                            <iframe
                                src={step.data.video}
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                                className={"backoffice_training_preview_video_iframe"}
                            />
                        </div>
                        <div className={"backoffice_training_preview_description"}>
                            <User_course_video_nav
                                id={step.id}
                                informations={step.data.information}
                                professors={step.data.professors}
                                description={step.data.description}
                                comments={step.data.comments}
                            />
                        </div>
                    </div>
                )
            case "exercise/qcm":
                return (
                    <div className={"backoffice_training_preview_container max_width"}>
                        <div className={"backoffice_training_preview_qcm"}>
                            {
                                step.data.map((qcm, i) => {
                                    return (
                                        <div className={"backoffice_training_preview_qcm_question"}>
                                            <p>{qcm.question}</p>
                                            {
                                                qcm.choice.map((choice, i) => {
                                                    return (
                                                        <div
                                                            className={"backoffice_training_preview_qcm_question_choice"}>
                                                            <input type={"checkbox"}/>
                                                            <p>{choice.answer}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            case "exercise/bind_list":
                return (
                    <div className={"backoffice_training_preview_container max_width"}>
                        <div className={"backoffice_training_preview_bind_list"}>
                            {
                                step.data.map((bind, i) => {
                                    return (
                                        <div className={"backoffice_training_preview_bind_list_bind"}>
                                            <p>{bind.bind1}</p>
                                            <p>{bind.bind2}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            case "review":
                return (
                    <div className={"backoffice_training_preview_container max_width"}>
                        <div className={"backoffice_training_preview_review"}>
                            <p>Review</p>
                        </div>
                    </div>
                )
        }
    }


    return (
        <>
            <Header/>
            <Header_section_page numberUndoPage={1} title={step.value}/>
            <main className={"max_width_container"}>
                <div className={"backoffice_training_preview_container max_width"}>
                    {typeStep()}
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}