import {useState} from "react";
import {elementType} from "prop-types";

type Props = {
    name: string
    placeholder: string
    setValue: any
    propsSetValue: any
    value: any
};

/***
 *
 * @param name
 * @param placeholder
 * @param setValue
 * @param propsSetValue (laisser vide si setValue n'est pas une fonction)
 * @param value
 * @constructor
 *
 *
 * exemple setValue est une fonction
 * <Textarea
 *         name={"nom"}
 *         placeholder={"Nom"}
 *         setValue={setValue}
 *         propsSetValue{"," + props}
 *         value={value}
 *  />
 *
 * exemple setValue est un useState
 * <Textarea
 *         name={"non"}
 *         placeholder={"Nom"}
 *         setValue={setValue}
 *         propsSetValue{""}
 *         value={value}
 *  />
 */
export default function Textarea({name, placeholder, setValue, propsSetValue, value}: Props) {

    return (
        <div className="input-container">
            <textarea onChange={(e) => {setValue(e.target.value, propsSetValue)}}  id={name} className={"input"} placeholder=" ">
                {value}
            </textarea>
            <label htmlFor={name} className="placeholder">{placeholder}</label>
        </div>
    )
}