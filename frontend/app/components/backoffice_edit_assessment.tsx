import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Checkbox from "~/kits/checkbox";
import Textarea from "~/kits/textarea";
import {NavLink, useNavigate} from "@remix-run/react";
import Header_section_page from "~/kits/header_section_page";

export default function Backoffice_edit_assessment() {

    const [assessment, setAssessment] = useState({
        studen: "Jean Paul",
        course: "Cour de flute baroke",
        evaluationType: "video",
        contente: "https://www.youtube.com/embed/GwhXOrygQWk",
        note: "",
        isValidate: false,
        isNotValidate: false,
        ratragage: false,
        noRatragage: false,
        status: "en attente"
    })
    const [isValidate, setIsValidate] = useState(false)
    const [isNotValidate, setIsNotValidate] = useState(false)
    const [ratragage, setRatragage] = useState(false)
    const [noRatragage, setNoRatragage] = useState(false)

    const changeValue = (value:any, props:{valuToChange:string}) => {
        let newData = {...assessment}
        switch (props.valuToChange) {
            case "note" :
                newData.note = value
                break
            case "isValidate" :
                newData.isValidate = value
                newData.isNotValidate = false
                setIsValidate(value)
                setIsNotValidate(false)
                changeStatus(newData)
                break
            case "isNotValidate" :
                newData.isValidate = false
                newData.isNotValidate = value
                setIsValidate(false)
                setIsNotValidate(value)
                changeStatus(newData)
                break
            case "ratragage" :
                newData.ratragage = value
                newData.noRatragage = false
                setRatragage(value)
                setNoRatragage(false)
                break
            case "noRatragage" :
                newData.ratragage = false
                newData.noRatragage = value
                setRatragage(false)
                setNoRatragage(value)
                break
        }
        setAssessment(newData)
    }

    const changeStatus = (newData:any) => {
        if (newData.isValidate) {
            newData.ratragage = false
            newData.noRatragage = false
            setRatragage(false)
            setNoRatragage(false)
            newData.status = "validé"
        } else if (newData.isNotValidate) {
            newData.ratragage = true
            newData.noRatragage = false
            setRatragage(true)
            setNoRatragage(false)
            newData.status = "raté"
        } else {
            newData.ratragage = false
            newData.noRatragage = false
            setRatragage(false)
            setNoRatragage(false)
            newData.status = "en attente"
        }
        // console.log(newData)
    }

    const displayContent = () => {
        switch (assessment.evaluationType) {
            case "video":
                return (
                    <iframe
                        className={"content"}
                        src={assessment.contente}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )
        }
    }
    return (
        <>
            <Header_section_page title={assessment.studen}/>
            <section className={"max_width_container"}>
                <div className={"assessment_container-open max_width"}>
                    <h1>Contenu :</h1>
                    <h3>{assessment.course}</h3>
                    {displayContent()}
                    <div className={"assessment_section"}>
                        <p>Valider</p>
                        <div>
                            <span>
                                <p>Oui</p>
                                <Checkbox
                                    name={"checkYes"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{valuToChange: "isValidate"}}
                                    value={isValidate}
                                />
                            </span>
                            <span>
                                <p>Nom</p>
                                <Checkbox
                                    name={"checkNo"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{valuToChange: "isNotValidate"}}
                                    value={isNotValidate}
                                />
                            </span>
                        </div>
                    </div>
                    {assessment.isNotValidate ?
                        <div className={"assessment_section"}>
                            <p>Ratrapage</p>
                            <div>
                            <span>
                                <p>Oui</p>
                                <Checkbox
                                    name={"checkYes"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{valuToChange: "ratragage"}}
                                    value={ratragage}
                                />
                            </span>
                                <span>
                                <p>Nom</p>
                                <Checkbox
                                    name={"checkNo"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{valuToChange: "noRatragage"}}
                                    value={noRatragage}
                                />
                            </span>
                            </div>
                        </div>
                        :
                        ""
                    }
                    <div className={"assessment_section"}>
                        <Textarea
                            name={"note"}
                            placeholder={"Remarque"}
                            setValue={changeValue}
                            propsSetValue={{valuToChange: "note"}}
                            value={assessment.note}
                        />
                    </div>

                    <button className={"button"} onClick={() => {
                        console.log(assessment)
                    }}>Valider
                    </button>
                </div>
            </section>
        </>
    );
}
