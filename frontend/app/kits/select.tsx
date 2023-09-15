import 'remixicon/fonts/remixicon.css'
import {useEffect, useRef, useState} from "react";

interface ContentProps {
    value: string
    option: string
}

interface Props {
    optionSelected: number
    setOptionSelected: any
    contents: ContentProps[]
    setValue: any
    propsSetValue: any
}

/***
 * exemple de contente: 
 * [{value:"Men", option:"Homme"},{value:"Woman", option:"Femme"}, {value:"Other", option:"Autre"}]
 */
export default function Select({optionSelected, setOptionSelected, contents, setValue, propsSetValue}: Props) {
    const [showOptionTrue, setShowOptionTrue] = useState(false)

    const showOptions = () => {
        setShowOptionTrue(!showOptionTrue)
    }

    const selctOption = (value: string, id:number) => {
        setShowOptionTrue(false)
        setOptionSelected(id)
        setValue(value,id, propsSetValue)
    }

    return (
        <div className="input-container" id={"select_container"}>
            <div onClick={showOptions} className="select_button">
                <span>{contents[optionSelected].value}</span>
                <i className="ri-expand-up-down-line"></i>
            </div>
            {showOptionTrue ?
                <span className={"overlay"}
                      onClick={showOptions}
                ></span>
                :
                <></>}
            <ul className={showOptionTrue ? "options options-visible" : "options"}>
                {contents.map((content, i) => {
                    return (
                        <li onClick={() => selctOption(content.value, i)}
                            className={showOptionTrue ? "option option-visible" : "option"}>
                            {content.value}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}