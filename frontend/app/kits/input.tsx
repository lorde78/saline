import {useState} from "react";
import {elementType} from "prop-types";

type Props = {
    name: string
    type: string
    placeholder: string
};


export default function Input({type, name, placeholder}: Props) {

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
            <input id={name} className={"input"} type={typeInput} placeholder=" "/>
            <label htmlFor={name} className="placeholder">{placeholder}</label>
            {type == 'password' ? <i className={eye} onClick={showPassword}></i> : ''}
        </div>
    )
}