import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";
import {Outlet, useLocation} from "@remix-run/react";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: assessment}
    ]
}

export default function BackofficeAssessments() {

    const [assessments, setAssessments] = useState([
        {
            studen: "Jean Paul",
            course: "Cour de flute baroke",
            evaluationType: "video",
            contente: "https://www.youtube.com/embed/GwhXOrygQWk",
            note: "",
            isValidate: false,
            isNotValidate: false,
            ratragage: false,
            noRatragage: false,
            status: "en attente"
        },
        {
            studen: "Jean Paul",
            course: "Cour de flute baroke",
            evaluationType: "video",
            contente: "https://www.youtube.com/embed/GwhXOrygQWk",
            note: "",
            isValidate: false,
            isNotValidate: false,
            ratragage: false,
            noRatragage: false,
            status: "en attente"
        },
        {
            studen: "Jean Paul",
            course: "Cour de flute baroke",
            evaluationType: "video",
            contente: "https://www.youtube.com/embed/GwhXOrygQWk",
            note: "",
            isValidate: false,
            isNotValidate: false,
            ratragage: false,
            noRatragage: false,
            status: "en attente"
        }
    ])
    return (
        <div className={"page_change_section_container"}>
            <div className={useLocation().pathname === "/backoffice/assessments" ? "page_change_section page_out" : "page_change_section page_in"}>
                <div className={"backoffice_assessments_preview_container"}>
                    {
                        assessments.map((assessment, i) => {
                            return (
                                <Backoffice_assessment
                                    id={i}
                                    studen={assessment.studen}
                                    course={assessment.course}
                                    status={assessment.status}
                                />
                            )
                        })
                    }
                </div>
                <Outlet/>
            </div>
        </div>

    )
}