import {useState} from "react";
import 'remixicon/fonts/remixicon.css'
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";

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
    const addAnAnswer = (idContent) => {
        let newArr = [...qcmData]
        newArr[idContent].choice.push(
            {
                "answer": "",
                "goodAnswer": false
            }
        )
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
                            <Checkbox name={"MultipleChoice" + idContent} type={"checkbox"} text={"Choix multiple"}
                                      setValue={setMultipleChoice} propsSetValue={idContent}
                                      value={content.multipleChoice}/>
                            {/*<button className={}><i className="ri-delete-bin-7-line"></i> </button>*/}
                        </div>
                        <div className={"answer_container"}>
                            {content.choice.map((answer, idAnswer) => {
                                return (
                                    <div className={"answer"} key={idAnswer}>
                                        <Input name={"reponse " + idContent} type={"text"}
                                               placeholder={"Réponse " + idAnswer} setValue={setAnswer}
                                               propsSetValue={[idContent, idAnswer]} value={answer.answer}/>
                                        <Checkbox name={"goodAnswer" + idContent} type={content.multipleChoice ? "checkbox":"radio"} text={""} setValue={setgoodAnswer}
                                                  propsSetValue={[idContent, idAnswer]} value={answer.goodAnswer}/>
                                    </div>
                                )
                            })}
                            <button className={"button"} onClick={() => {addAnAnswer(idContent)}}>Ajouter une réponse</button>
                        </div>
                    </div>
                )
            })}
            <button className={"button"} onClick={addAQuestion}>Ajouter une question</button>
        </div>
    )
}