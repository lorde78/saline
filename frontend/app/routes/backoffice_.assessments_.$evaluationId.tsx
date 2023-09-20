import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";
import Backoffice_edit_assessment from "~/components/backoffice_edit_assessment";
import {useGlobalEffect} from "~/helper/globalHelper";
import {useNavigate} from "react-router-dom";
import {signinContext} from "~/context/signinContext";
import {isLogged} from "~/helper/isLogged";
import useGetProgress from "~/hook/useGetProgress";
import Loader from "~/kits/loader";
import getIdFromUrl from "~/helper/getIdFromUrl";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: assessment}
    ];
}

export default function BackofficeAssessmentsEvaluationId() {
    useGlobalEffect("backoffice");

    const [loader, setLoader] = useState(false);
    const [progressLesson, setProgressLesson] = useState<any>([]);
    const getAllProgress = useGetProgress();
    const getCurrentId = getIdFromUrl(0);

    const getProgress = async () => {
        const currentProgress = await getAllProgress("progressLesson", "id",getCurrentId);
        //@ts-ignore
        setProgressLesson(currentProgress[0]);
        setLoader(true);
    }

    useEffect(() => {
        getProgress();
    }, []);

    return (
        <>
            {loader ? (
                <div className={"backoffice_assessment_id_container "}>
                    <Backoffice_edit_assessment assessmentData={progressLesson} setAssessmentData={setProgressLesson}/>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    );
}