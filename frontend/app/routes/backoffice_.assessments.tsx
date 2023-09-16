import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";
import { Outlet, useLocation } from "@remix-run/react";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";
import stylesRefacto from "~/styles/styleRefacto.css";
import {isLogged} from "~/helper/isLogged";

type Assessment = {
    studen: string;
    course: string;
    evaluationType: string;
    contente: string;
    note: string;
    isValidate: boolean;
    isNotValidate: boolean;
    ratragage: boolean;
    noRatragage: boolean;
    status: string;
};

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: assessment },
        {rel: 'stylesheet', href: stylesRefacto},
    ];
}

export default function Backoffice_Assessments() {
    useGlobalEffect();
    isLogged("backoffice");

    const [assessments, setAssessments] = useState<Assessment[]>([
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
    ]);

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"évaluations"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"main_section_container-flex max_width margin-top-20"}>
                    {assessments.map((assessment, i) => (
                        <Backoffice_assessment
                            key={i}
                            id={i}
                            studen={assessment.studen}
                            course={assessment.course}
                            status={assessment.status}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}