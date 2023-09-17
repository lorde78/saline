import Checkbox from "~/kits/checkbox";
import { useEffect, useState } from "react";

interface QcmChoice {
    answer: string;
    goodAnswer: boolean;
}

interface QcmData {
    question: string;
    multipleChoice: boolean;
    choice: QcmChoice[];
}

interface Step {
    id: number;
    value: string;
    type: string;
    status?: string;
    data: QcmData[];
}

interface Answer {
    value: boolean;
}

type ExerciseAnswer = Answer[][];

interface SetExerciseProps {
    idQCM: number;
    idChoice: number;
}

type Props = {
    step: Step;
    setValue: any
}

export default function User_courses_step_exercise_qcm({ step, setValue }: Props) {
    const setDefaultExerciseAnswer = (): ExerciseAnswer => {
        return step.data.map(qcm => qcm.choice.map(() => ({ value: false })));
    }

    const [exerciseAnswer, setExerciseAnswer] = useState<ExerciseAnswer>(setDefaultExerciseAnswer());

    const setExerciseAnswerData = (value: boolean, props: SetExerciseProps) => {
        const exerciseAnswerTemp: ExerciseAnswer = [...exerciseAnswer];

        if (!step.data[props.idQCM].multipleChoice) {
            exerciseAnswerTemp[props.idQCM].forEach(choice => choice.value = false);
        }

        exerciseAnswerTemp[props.idQCM][props.idChoice].value = value;
        setExerciseAnswer(exerciseAnswerTemp);
    }

    const [allAnswered, setAllAnswered] = useState<boolean | null>(false);
    const allQuestionsAnswered = () => {
        const allAnswered = exerciseAnswer.every(question => question.some(choice => choice.value));
        setAllAnswered(allAnswered);
    }

    useEffect(() => {
        allQuestionsAnswered()
    }, [exerciseAnswer]);

    const validateAnswers = () => {
        let correctAnswersCount = 0;
        for (let i = 0; i < step.data.length; i++) {
            const questionData = step.data[i];
            const userAnswers = exerciseAnswer[i];
            if (questionData.multipleChoice) {
                let goodAnswerCount = 0;
                for (let j = 0; j < questionData.choice.length; j++) {
                    const choiceData = questionData.choice[j];
                    const userAnswer = userAnswers[j].value;
                    if (choiceData.goodAnswer !== userAnswer) {

                        break;
                    } else {
                        goodAnswerCount++;
                    }
                }
                if (goodAnswerCount === questionData.choice.length) {
                    correctAnswersCount++;
                }

            } else {
                for (let j = 0; j < questionData.choice.length; j++) {
                    const choiceData = questionData.choice[j];
                    const userAnswer = userAnswers[j].value;
                    if (choiceData.goodAnswer === userAnswer && userAnswer) {
                        correctAnswersCount++;
                    }
                }
            }
        }
        if (correctAnswersCount === step.data.length) {
            alert("Toutes les réponses sont correctes!");
        } else {
            alert(`Vous avez ${correctAnswersCount} bonnes réponses sur ${step.data.length} questions.`);
        }
        setValue(step.id, 'exercise/qcm', exerciseAnswer)
    }


    return (
        <>
            {
                step.data.map((qcm, idQCM) => (
                    <div className={"QCM_container"}>
                        <div>
                            <h3>{qcm.question}</h3>
                            {qcm.multipleChoice ? <p className={"sub_title"}>Choix multiple</p> : null}
                        </div>
                        <div>
                            {
                                qcm.choice.map((choice, idChoice) => (
                                    <div className={""}>
                                        <Checkbox
                                            name={"checkbox_" + idQCM + "_" + idChoice}
                                            type={qcm.multipleChoice ? "checkbox" : "radio"}
                                            text={""}
                                            setValue={setExerciseAnswerData}
                                            propsSetValue={{ idQCM, idChoice }}
                                            value={exerciseAnswer[idQCM][idChoice].value}
                                        />
                                        <p>{choice.answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            {allAnswered ? <button onClick={validateAnswers} className={"button"}>Envoyer</button> : null}
        </>
    )
}