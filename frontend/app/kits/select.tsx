import 'remixicon/fonts/remixicon.css'
import {useEffect, useRef, useState} from "react";

interface ContentProps {
    value: string
    option: string
}

interface Props {
    defaultContent: string
    contents: ContentProps[]
}

/***
 * exemple de contente: 
 * [{value:"Men", option:"Homme"},{value:"Woman", option:"Femme"}, {value:"Other", option:"Autre"}]
 */
export default function Select({defaultContent, contents}: Props) {
    const [showOptionTrue, setShowOptionTrue] = useState(false)
    const [optionSelect, setOptionSelect] = useState(defaultContent)
    const [optionSelectValue, setOptionSelectValue] = useState("")

    const showOptions = () => {
        setShowOptionTrue(!showOptionTrue)
    }

    const selctOption = (value: string, option: string) => {
        setOptionSelect(option)
        setOptionSelectValue(value)
        setShowOptionTrue(false)
    }


    return (
        <div className="input-container" id={"select_container"}>
            <div onClick={showOptions} className="select_button">
                <span>{optionSelect}</span>
                <i className="ri-expand-up-down-line"></i>
            </div>
            <ul className={showOptionTrue ? "options options-visible" : "options"}>
                {contents.map((content) => {
                    return (
                        <li onClick={() => selctOption(content.value, content.option)}
                            className={showOptionTrue ? "option option-visible" : "option"}>
                            {content.option}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}