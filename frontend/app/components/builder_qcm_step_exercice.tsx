import {useState} from "react";
import 'remixicon/fonts/remixicon.css'
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";
import {list} from "postcss";

export default function Builder_qcm_step_exercice() {
    const [qcmData, setQcmData] = useState([{
        "question": "",
        "multipleChoice": false,
        "choice": [
            {
                "answer": "",
                "goodAnswer": false
            }
        ]
    }])

    const setQuestion = (value, idContent) => {
        let newArr = [...qcmData]
        newArr[idContent].question = value
        setQcmData(newArr)
    }
    const setAnswer = (value, idList) => {
        let newArr = [...qcmData]
        newArr[idList[0]].choice[idList[1]].answer = value
        setQcmData(newArr)
    }
    const setMultipleChoice = (value, idContent) => {
        let newArr = [...qcmData]
        newArr[idContent].multipleChoice = value
        qcmData[idContent].choice.map((answer) => {
            answer.goodAnswer = false
        })

        setQcmData(newArr)
    }
    const setgoodAnswer = (value, idList) => {
        let newArr = [...qcmData]

        if (!qcmData[idList[0]].multipleChoice) {
            qcmData[idList[0]].choice.map((answer) => {
                answer.goodAnswer = false
            })
        }

        newArr[idList[0]].choice[idList[1]].goodAnswer = value

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

    const deleteQuestion = (idContent) => {
        if (idContent > 1) {
            let newArr = [...qcmData]
            delete newArr[idContent]
            let suprArr = newArr.splice(idContent, idContent)

            console.log(newArr)
            console.log(suprArr)
            setQcmData(newArr)
        }
    }
    const deleteAnswer = (idList) => {
        let newArr = [...qcmData]
        let suprArr = newArr[idList[0]].choice.splice(idList[1], idList[1])

        console.log(newArr)
        console.log(suprArr)
        setQcmData(newArr)
    }
    console.log("data")
    console.log(qcmData)

    return (
        <div className={"builder_qcm_step_exercice"}>
            {qcmData.map((content, idContent) => {
                return (
                    <div className={"question_container"} key={idContent}>
                        <div className={"question"}>
                            <Input name={"question" + idContent} type={"text"} placeholder={"Question " + idContent}
                                   setValue={setQuestion} propsSetValue={idContent} value={content.question}/>
                            <div>
                                <Checkbox name={"MultipleChoice" + idContent} type={"checkbox"} text={"Choix multiple"}
                                          setValue={setMultipleChoice} propsSetValue={idContent}
                                          value={content.multipleChoice}/>
                                <button className={"button button_alert"} onClick={() => {
                                    deleteQuestion(idContent)
                                }}>
                                    <i className="ri-delete-bin-7-line"></i>
                                </button>
                            </div>
                        </div>
                        <div className={"answer_container"}>
                            {content.choice.map((answer, idAnswer) => {
                                return (
                                    <div className={"answer"} key={idAnswer}>
                                        <Input name={"reponse " + idContent} type={"text"}
                                               placeholder={"Réponse " + idAnswer} setValue={setAnswer}
                                               propsSetValue={[idContent, idAnswer]} value={answer.answer}/>
                                        <div>
                                            <Checkbox name={"goodAnswer" + idContent}
                                                      type={content.multipleChoice ? "checkbox" : "radio"} text={""}
                                                      setValue={setgoodAnswer}
                                                      propsSetValue={[idContent, idAnswer]} value={answer.goodAnswer}/>
                                            <button className={"button button_alert"} onClick={() => {
                                                deleteAnswer([idContent, idAnswer])
                                            }}>
                                                <i className="ri-delete-bin-7-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            <button className={"button"} onClick={() => {
                                addAnAnswer(idContent)
                            }}>Ajouter une réponse
                            </button>
                        </div>
                    </div>
                )
            })}
            <button className={"button"} onClick={addAQuestion}>Ajouter une question</button>
        </div>
    )
}