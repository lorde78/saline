import { useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";
import Backoffice_edit_assessment from "~/components/backoffice_edit_assessment";
import { useGlobalEffect } from "~/helper/globalHelper";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: assessment }
    ];
}

export default function Backoffice_Classroom_ClassroomId_Edit_Assessments_EvaluationId() {
    useGlobalEffect();
    isLogged("backoffice");

    return (
        <div className={"backoffice_assessment_id_container"}>
            <Backoffice_edit_assessment />
        </div>
    );
}