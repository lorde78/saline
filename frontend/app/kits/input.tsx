import {useState} from "react";
import {elementType} from "prop-types";

type Props = {
    name: string
    type: string
    placeholder: string
    setValue: any
    propsSetValue : any
    value: any
};

/***
 *
 * @param type
 * @param name
 * @param placeholder
 * @param setValue
 * @param propsSetValue (laisser vide si setValue n'est pas une fonction)
 * @param value
 * @constructor
 *
 * exemple setValue est une fonction
 * <Input
 *         name={"nom"}
 *         type={"text"}
 *         placeholder={"Nom"}
 *         setValue={setValue}
 *         propsSetValue{"," + props}
 *         propsSetValue{{"idContent" : idContent, "idAnswer" : idAnswer}}
 *         value={value}
 *  />
 *
 * exemple setValue est un useState
 * <Input
 *         name={"nom"}
 *         type={"text"}
 *         placeholder={"Nom"}
 *         setValue={setValue}
 *         propsSetValue{""}
 *         value={value}
 *  />
 *
 */


export default function Input({type, name, placeholder, setValue, propsSetValue, value}: Props) {

    const [typeInput, setTypeInput] = useState(type)
    const [eye, setEye] = useState("ri-eye-2-line")
    const showPassword = () => {
        switch (typeInput) {
            case "password":
                setEye("ri-eye-close-line")
                setTypeInput("text")
                break
            case "text":
                setEye("ri-eye-2-line")
                setTypeInput("password")
                break
            default:
                setEye("ri-eye-2-line")
                setTypeInput("password")
                break
        }
    }

    return (
        <div className="input-container">
            <input onChange={(e) => {setValue(e.target.value, propsSetValue)}} id={name} className={"input"} type={typeInput} placeholder=" " value={value} />
            <label htmlFor={name} className="placeholder">{placeholder}</label>
            {type == 'password' ? <i className={eye} onClick={showPassword}></i> : ''}
        </div>
    )
}