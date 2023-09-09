import Checkbox from "~/kits/checkbox";
import {useEffect, useState} from "react";

type Props = {
    step: any
}
export default function User_courses_step_exercise_bindlist({step}: Props) {
    const setDefaultExerciseAnswer = () => {
        let exerciseAnswerDefault: any[] = []
        step.data.map((bind:any, id:number) => {
            exerciseAnswerDefault.push({value: ""})
        })
        return exerciseAnswerDefault
    }

    const [exerciseAnswer, setExerciseAnswer] = useState(setDefaultExerciseAnswer())

    const setExerciseAnswerData = (value: any, props: any) => {
        let exerciseAnswerTemp: any[] = [...exerciseAnswer]
        exerciseAnswerTemp[props.idBind].value = value
        setExerciseAnswer(exerciseAnswerTemp)
    }

    useEffect(() => {
        console.log(exerciseAnswer)
    }, [exerciseAnswer])

    return (
        <>
            <div className={""}>
                {
                    step.data.map((bind: any, id: number) => {
                        return (
                            <div className={""}>
                                <p>{bind.bind1}</p>
                                <p>{bind.bind2}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}