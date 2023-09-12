import {useState} from "react";
import 'remixicon/fonts/remixicon.css'
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";
import {list} from "postcss";

type Props = {
    bindListData: any
    setBindListData: any
}
export default function Builder_bind_list_step_exercice({bindListData, setBindListData}:Props) {
    const setBind = (value:string, content:any) => {
        let newArr = [...bindListData]
        switch (content.input) {
            case "bind1":
                newArr[content.id].bind1 = value
                break
            case "bind2":
                newArr[content.id].bind2 = value
                break
            default:
                break

        }
        setBindListData(newArr)
    }

    const addBind = () => {
        let newArr = [...bindListData]
        newArr.push(
            {
                "bind1": "",
                "bind2": ""
            }
        )
        setBindListData(newArr)
    }

    const deleteBind = () => {
        if (bindListData.length > 1) {
            let newArr = [...bindListData]
            newArr.pop()
            setBindListData(newArr)
        }
    }

    return (
        <div className={"builder_bind_list_step_exercice builder_exercise_step_exercice"}>
            {bindListData.map((bind:any, id:number) => {
                return (
                    <div className={"bind_container"} key={id}>
                        <Input name={"bind" + id} type={"text"} placeholder={"Lien " + id}
                               setValue={setBind} propsSetValue={{"id":id, "input":"bind1"}} value={bind.bind1}/>
                        <Input name={"bind" + id} type={"text"} placeholder={"Lien " + id}
                               setValue={setBind} propsSetValue={{"id":id, "input":"bind2"}} value={bind.bind2}/>
                    </div>
                )
            })}
            <div className={"buttons_container"}>
                <button className={"button"} onClick={addBind}>Ajouter</button>
                <button className={"button button_alert"} onClick={deleteBind}>
                    <i className="ri-delete-bin-7-line"></i>
                </button>
            </div>
        </div>
    )
}