import Checkbox from "~/kits/checkbox";
import {useEffect, useState} from "react";
import {a} from "vite-node/types-63205a44";

type Props = {
    step: any
}
export default function User_courses_step_exercise_qcm({step}: Props) {
    const setDefaultExerciseAnswer = () => {
        let exerciseAnswerDefault: any[] = []
        step.data.map((qcm:any, id:number) => {
            let exerciseAnswerDefaultChoice: any[] = []
            qcm.choice.map((choice:any, id:number) => {
                exerciseAnswerDefaultChoice.push({value: false})
            })
            exerciseAnswerDefault.push(exerciseAnswerDefaultChoice)
        })
        return exerciseAnswerDefault
    }

    const [exerciseAnswer, setExerciseAnswer] = useState(setDefaultExerciseAnswer())

    const setExerciseAnswerData = (value: any, props: any) => {
        if (!step.data[props.idQCM].multipleChoice) {
            let exerciseAnswerTemp: any[] = [...exerciseAnswer]
            exerciseAnswerTemp[props.idQCM].map((choice: any, i: any) => {
                exerciseAnswerTemp[props.idQCM][i].value = false
            })
            setExerciseAnswer(exerciseAnswerTemp)
        }

        let exerciseAnswerTemp: any[] = [...exerciseAnswer]
        exerciseAnswerTemp[props.idQCM][props.idChoice].value = value
        setExerciseAnswer(exerciseAnswerTemp)
    }


    useEffect(() => {
        console.log(exerciseAnswer)
    }, [exerciseAnswer])

    return (
        <>
            <div className={""}>
                {
                    step.data.map((qcm: any, idQCM: number) => {
                        return (
                            <div className={""}>
                                <p>{qcm.question}</p>
                                {
                                    qcm.choice.map((choice: any, idChoice: number) => {
                                        return (
                                            <div
                                                className={""}>
                                                <Checkbox
                                                    name={"checkbox_" + idQCM + "_" + idChoice}
                                                    type={qcm.multipleChoice ? "checkbox" : "radio"}
                                                    text={""}
                                                    setValue={setExerciseAnswerData}
                                                    propsSetValue={{idQCM: idQCM, idChoice: idChoice}}
                                                    value={exerciseAnswer[idQCM][idChoice].value}
                                                />

                                                <p>{choice.answer}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <button className={"button"}>Envoyer</button>
            </div>
        </>
    )
}