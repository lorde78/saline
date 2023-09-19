import 'remixicon/fonts/remixicon.css';
import {useState} from "react";

interface ContentProps {
    value: string
    option: string
}

interface Props {
    optionsSelected: number[];
    setOptionsSelected: (selected: number[]) => void;
    contents: ContentProps[];
    setValue: (value: string, id: number) => void;
}

export default function Select_multiple({optionsSelected, setOptionsSelected, contents, setValue}: Props) {
    const [showOptionTrue, setShowOptionTrue] = useState(false);

    const showOptions = () => {
        setShowOptionTrue(!showOptionTrue);
    }

    const selectOption = (value: string, id: number) => {
        if (optionsSelected.includes(id)) {
            setOptionsSelected(optionsSelected.filter(optionId => optionId !== id));
        } else {
            setOptionsSelected([...optionsSelected, id]);
        }
        setValue(value, id);
    }

    const selectedValues = optionsSelected.map(id => contents[id].value).join(', ');

    return (
        <div className="input-container" id="select_container">
            <div onClick={showOptions} className="select_button">
                <span>{selectedValues || "Sélectionnez une option"}</span>
                <i className="ri-expand-up-down-line"></i>
            </div>
            {showOptionTrue ? <span className="overlay" onClick={showOptions}/> : <></>}
            <ul className={showOptionTrue ? "options options-visible" : "options"}>
                {contents.map((content, i) => {
                    return (
                        <li onClick={() => selectOption(content.value, i)}
                            className={
                                showOptionTrue && !optionsSelected.includes(i) ? "option option-visible"
                                    : showOptionTrue && optionsSelected.includes(i) ? "option option-selected option-visible"
                                        : optionsSelected.includes(i) ? "option option-selected"
                                            : "option"}>
                            {content.value}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
