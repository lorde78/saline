import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";
import {Outlet, useLocation} from "@remix-run/react";
import Header_section_page from "~/kits/header_section_page";
import {useGlobalEffect} from "~/helper/globalHelper";
import stylesRefacto from "~/styles/styleRefacto.css";
import {isLogged} from "~/helper/isLogged";
import Loader from "~/kits/loader";
import useGetProgress from "~/hook/useGetProgress";

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
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: assessment},
        {rel: 'stylesheet', href: stylesRefacto},
    ];
}

export default function Backoffice_Assessments() {
    useGlobalEffect("backoffice");

    const [loader, setLoader] = useState(false);
    const [progressLesson, setProgressLesson] = useState<[]>([]);
    const getAllProgress = useGetProgress();

    const getProgress = async () => {
        const allProgress = await getAllProgress("progressLesson", "");
        //@ts-ignore
        console.log(allProgress);
        setProgressLesson(allProgress);
        setLoader(true);
    }

    useEffect(() => {
        getProgress();
    }, []);

    useEffect(() => {
        console.log(progressLesson)
    }, [progressLesson]);

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page numberUndoPage={1} title={"évaluations"} logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width margin-top-20"}>
                            {(progressLesson ?? []).length !== 0 ? (
                                progressLesson.filter((progress:any) => progress.status === "Validation").map((progress:any, i) => (
                                    <Backoffice_assessment
                                        key={i}
                                        id={progress.student.id}
                                        student={progress.student}
                                        course={progress.lesson.title}
                                        status={progress.status}
                                    />
                                ))
                            ) : (
                                <p>Aucune évaluation pour le moment.</p>
                            )}
                        </div>
                    </section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}