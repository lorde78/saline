import {useState} from "react";
import {elementType} from "prop-types";

type Props = {
    name: string
    placeholder: string
    setValue: any
    value: any
};


export default function Textarea({name, placeholder, setValue, value}: Props) {

    return (
        <div className="input-container">
            <textarea onChange={(e) => {setValue(e.target.value)}}  id={name} className={"input"} placeholder=" ">
                {value}
            </textarea>
            <label htmlFor={name} className="placeholder">{placeholder}</label>
        </div>
    )
}