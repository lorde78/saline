import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import backofficeBanner from "~/styles/backofficeBanner.css";
import Backoffice_assessment from "~/components/backoffice_assessment";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: backofficeBanner}
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
            ratragage: false,
            status: "en attente"
        }
    ])
    const changeValue = (value, props) => {
        let newArr = [...assessments]
        switch (props.valuToChange) {
            case "note" :
                newArr[props.id].note = value
                break
            case "isValidate" :
                newArr[props.id].isValidate = value
                break
            case "ratragage" :
                newArr[props.id].ratragage = value
                break
        }
        setAssessments(newArr)
    }

    return (
        <div className={"backoffice_assessments_container"}>
            {
                assessments.map((assessment, i) => {
                    return (
                        <Backoffice_assessment
                            id={i}
                            studen={assessment.studen}
                            course={assessment.course}
                            evaluationType={assessment.evaluationType}
                            contente={assessment.contente}
                            isValidate={assessment.isValidate}
                            ratragage={assessment.ratragage}
                            status={assessment.status}
                            setValue={changeValue}
                        />
                    )
                })
            }
        </div>

    )
}
