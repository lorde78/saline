import 'remixicon/fonts/remixicon.css'
import {useEffect, useRef, useState} from "react";

interface ContentProps {
    value: string
    option: string
}

interface Props {
    id: string
    name: string
    contents: ContentProps[]
}

export default function Select({id, name, contents}: Props) {
    const [showOptionTrue, setShowOptionTrue] = useState(false)
    const [genderSelect, setGenderSelect] = useState("Quel est votre Genre ?")
    const [genderSelectValue, setGenderSelectValue] = useState("")

    const showOptions = () => {
        setShowOptionTrue(!showOptionTrue)
    }

    const selctOption = (value: string, option:string) => {
        setGenderSelect(option)
        setGenderSelectValue(value)
        setShowOptionTrue(false)
    }

    return (
        <div className="input-container" id={"select_container"}>
            <div onClick={showOptions} className="select_button">
                <span>{genderSelect}</span>
                <i className="ri-expand-up-down-line"></i>
            </div>
            <ul className={"options"}>
                {contents.map((content) => {
                    return (
                        <li onClick={() => selctOption(content.value, content.option)}
                            className={showOptionTrue ? "option options-visible" : "option"}>
                            {content.option}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}