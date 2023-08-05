import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import assessment from "~/styles/backofficeAssessment.css";
import Backoffice_assessment from "~/components/backoffice_assessment";


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
                newArr[props.id].isNotValidate = false
                changeStatus(newArr, props)
                break
            case "isNotValidate" :
                newArr[props.id].isValidate = false
                newArr[props.id].isNotValidate = value
                changeStatus(newArr, props)
                break
            case "ratragage" :
                newArr[props.id].ratragage = value
                newArr[props.id].noRatragage = false
                break
            case "noRatragage" :
                newArr[props.id].ratragage = false
                newArr[props.id].noRatragage = value
                break
        }
        setAssessments(newArr)
    }

    const changeStatus = (newArr, props) => {
        if (newArr[props.id].isValidate) {
            newArr[props.id].ratragage = false
            newArr[props.id].noRatragage = false
            newArr[props.id].status = "validé"
        } else if (newArr[props.id].isNotValidate) {
            newArr[props.id].ratragage = true
            newArr[props.id].noRatragage = false
            newArr[props.id].status = "raté"
        } else {
            newArr[props.id].ratragage = false
            newArr[props.id].noRatragage = false
            newArr[props.id].status = "en attente"
        }
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
                            note={assessment.note}
                            isValidate={assessment.isValidate}
                            isNotValidate={assessment.isNotValidate}
                            ratragage={assessment.ratragage}
                            noRatragage={assessment.noRatragage}
                            status={assessment.status}
                            setValue={changeValue}
                        />
                    )
                })
            }
        </div>

    )
}
