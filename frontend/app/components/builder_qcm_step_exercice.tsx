import {useState} from "react";
import 'remixicon/fonts/remixicon.css'
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";
import {list} from "postcss";

type Props = {
    qcmData: any,
    setQcmData: any
}
export default function Builder_qcm_step_exercice({qcmData, setQcmData}:Props) {

    const setQuestion = (value:string, idContent:number) => {
        let newArr = [...qcmData]
        newArr[idContent].question = value
        setQcmData(newArr)
    }
    const setAnswer = (value:string, idList:{idContent:number,idAnswer:number}) => {
        let newArr = [...qcmData]
        newArr[idList.idContent].choice[idList.idAnswer].answer = value
        setQcmData(newArr)
    }
    const setMultipleChoice = (value:boolean, idContent:number) => {
        let newArr = [...qcmData]
        newArr[idContent].multipleChoice = value
        qcmData[idContent].choice.map((answer:any) => {
            answer.goodAnswer = false
        })

        setQcmData(newArr)
    }
    const setgoodAnswer = (value:boolean, idList:{idContent:number,idAnswer:number}) => {
        let newArr = [...qcmData]

        if (!qcmData[idList.idContent].multipleChoice) {
            qcmData[idList.idContent].choice.map((answer:any) => {
                answer.goodAnswer = false
            })
        }

        newArr[idList.idContent].choice[idList.idAnswer].goodAnswer = value

        setQcmData(newArr)
    }

    const addAQuestion = () => {
        let newArr = [...qcmData]
        newArr.push(
            {
                "question": "",
                "multipleChoice": false,
                "choice": [
                    {
                        "answer": "",
                        "goodAnswer": false
                    }
                ]
            }
        )
        setQcmData(newArr)
    }
    const addAnAnswer = (idContent: number) => {
        let newArr = [...qcmData]
        newArr[idContent].choice.push(
            {
                "answer": "",
                "goodAnswer": false
            }
        )
        setQcmData(newArr)
    }

    const deleteQuestion = () => {
        if (qcmData.length > 1) {
            let newArr = [...qcmData]
            newArr.pop()
            setQcmData(newArr)
        }
    }
    const deleteAnswer = (idContent:number) => {
        if (qcmData[idContent].choice.length > 1) {
            let newArr = [...qcmData]
            newArr[idContent].choice.pop()
            setQcmData(newArr)
        }
    }
    // console.log("data")
    // console.log(qcmData)

    return (
        <div className={"builder_qcm_step_exercice builder_exercise_step_exercice"}>
            {qcmData.map((content:any, idContent:number) => {
                return (
                    <div className={"question_container"} key={idContent}>
                        <div className={"question"}>
                            <Input name={"question" + idContent} type={"text"} placeholder={"Question " + idContent}
                                   setValue={setQuestion} propsSetValue={idContent} value={content.question}/>
                            <Checkbox name={"MultipleChoice" + idContent} type={"checkbox"} text={"Choix multiple"}
                                      setValue={setMultipleChoice} propsSetValue={idContent}
                                      value={content.multipleChoice}/>
                        </div>
                        <div className={"answer_container"}>
                            {content.choice.map((answer:any, idAnswer:number) => {
                                return (
                                    <div className={"answer"} key={idAnswer}>
                                        <Input name={"reponse " + idContent} type={"text"}
                                               placeholder={"Réponse " + idAnswer} setValue={setAnswer}
                                               propsSetValue={{"idContent" : idContent, "idAnswer" : idAnswer}} value={answer.answer}/>
                                        <div>
                                            <Checkbox name={"goodAnswer" + idContent}
                                                      type={content.multipleChoice ? "checkbox" : "radio"} text={""}
                                                      setValue={setgoodAnswer}
                                                      propsSetValue={{"idContent" : idContent, "idAnswer" : idAnswer}} value={answer.goodAnswer}/>

                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className={"buttons_container"}>
                            <button className={"button"} onClick={() => {
                                addAnAnswer(idContent)
                            }}>Ajouter une réponse
                            </button>

                            <button className={"button button_alert"} onClick={() => {
                                deleteAnswer(idContent)
                            }}>
                                <i className="ri-delete-bin-7-line"></i>
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className={"buttons_container"}>
                <button className={"button"} onClick={addAQuestion}>Ajouter une question</button>
                <button className={"button button_alert"} onClick={() => {
                    deleteQuestion()
                }}>
                    <i className="ri-delete-bin-7-line"></i>
                </button>
            </div>
        </div>
    )
}