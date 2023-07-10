import {useState} from "react";
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";

export default function Builder_qcm_step_exercice() {
    const [qcmData, setQcmData] = useState([{
        "question": "",
        "multipleChoice": false,
        "choice": [
            {
                "answer": "",
                "isTrue": false
            }
        ]
    },
        {
            "question": "",
            "multipleChoice": false,
            "choice": [
                {
                    "answer": "",
                    "isTrue": false
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
        setQcmData(newArr)
    }
    const setIsTrue = (value, idList) => {
        let newArr = [...qcmData]
        newArr[idList[0]].choice[idList[1]].isTrue = value
        setQcmData(newArr)
    }

    console.log(qcmData)

    return (
        <section className={"builder_step_container"}>
            {qcmData.map((content, idContent) => {
                return (
                    <div key={idContent}>
                        <div>
                            <Input name={"question" + idContent} type={"text"} placeholder={"Question " + idContent}
                                   setValue={setQuestion} propsSetValue={idContent} value={content.question}/>
                            <Checkbox name={"MultipleChoice" + idContent} text={"Choix multiple"}
                                      setValue={setMultipleChoice} propsSetValue={idContent}
                                      value={content.multipleChoice}/>
                        </div>
                        <div>
                            {content.choice.map((answer, idAnswer) => {
                                return (
                                    <div key={idAnswer}>
                                        <Input name={"reponse " + idContent} type={"text"}
                                               placeholder={"Réponse " + idContent} setValue={setAnswer}
                                               propsSetValue={[idContent, idAnswer]} value={answer.answer}/>
                                        <Checkbox name={"IsTrue" + idAnswer} text={""} setValue={setIsTrue}
                                                  propsSetValue={[idContent, idAnswer]} value={answer.isTrue}/>
                                    </div>
                                )
                            })}
                            <button className={"button"}>Ajouter une réponse</button>
                        </div>
                    </div>
                )
            })}
            <button className={"button"}>Ajouter une question</button>
        </section>
    )
}