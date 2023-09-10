import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Header_section_page from "~/kits/header_section_page";
import User_courses_step_exercise_bindlist from "~/components/user_courses_step_exercise_bindlist";
import User_courses_step_exercise_qcm from "~/components/user_courses_step_exercise_qcm";
import User_courses_step_video from "~/components/user_courses_step_video";
import User_courses_step_review from "~/components/user_courses_step_review";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

export default function Courses_CourseId_StepId() {


    const [step, setStep] = useState(
        // {
        //     id: 1,
        //     value: "étape 1",
        //     type: "video",
        //     professor: "Jean Paul",
        //     status: "Terminé",
        //     data:
        //         {
        //             description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
        //             information: {
        //                 infoDescription: "On sait depuis longtemps que ",
        //                 document: ""
        //             },
        //             video: "https://www.youtube.com/embed/Zi_XLOBDo_Y",
        //             professors: [
        //                 {
        //                     id: 0,
        //                     img: "https://www.w3schools.com/howto/img_avatar.png",
        //                     name: "Jean Paul",
        //                     roles: ["Professeur", "Administrateur"],
        //                     instruments: ["Guitare"]
        //                 },
        //                 {
        //                     id: 1,
        //                     img: "https://www.w3schools.com/howto/img_avatar.png",
        //                     name: "Jean Damien",
        //                     roles: ["Professeur"],
        //                     instruments: ["Guitare", "Basse"],
        //                 }
        //             ],
        //             comments: [
        //                 {
        //                     id: 0,
        //                 }
        //             ],
        //         }
        // }

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

        {
            id: 3,
            value: "étape 3",
            type: "exercise/bind_list",
            professor: "Jean Paul",
            status: "Non commencé",
            data: [
                {
                    bind1: "pommes",
                    bind2: "fruits",
                },
                {
                    bind1: "carottes",
                    bind2: "léguemes",
                },
                {
                    bind1: "poivres",
                    bind2: "épices",
                },
            ]
        }

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
                    <User_courses_step_video step={step}/>
                )
            case "exercise/qcm":
                return (
                    <User_courses_step_exercise_qcm step={step}/>
                )
            case "exercise/bind_list":
                return (
                    <User_courses_step_exercise_bindlist step={step}/>
                )
            case "review":
                return (
                    <User_courses_step_review step={step}/>
                )
        }
    }

    return (
        <>
            <Header/>
            <Header_section_page numberUndoPage={1} title={step.value}/>
            <main className={"max_width_container margin-top-20"}>
                <div className={"main_section_container-flex max_width"}>
                    {typeStep()}
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}