import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Checkbox from "~/kits/checkbox";
import Textarea from "~/kits/textarea";
import {NavLink, useNavigate} from "@remix-run/react";
import Header_section_page from "~/kits/header_section_page";

export default function Backoffice_edit_assessment(assessmentData: any,setAssessmentData:any) {
    assessmentData = assessmentData.assessmentData;
    const [isValidate, setIsValidate] = useState(false)
    const [isNotValidate, setIsNotValidate] = useState(false)
    const [rattrapage, setRattrapage] = useState(false)
    const [noRattrapage, setNoRattrapage] = useState(false)

    const changeValue = (value:any, props:{valuToChange:string}) => {
        let newData = {...assessmentData}
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
            case "rattrapage" :
                newData.rattrapage = value
                newData.noRattrapage = false
                setRattrapage(value)
                setNoRattrapage(false)
                break
            case "noRattrapage" :
                newData.rattrapage = false
                newData.noRattrapage = value
                setRattrapage(false)
                setNoRattrapage(value)
                break
        }
        setAssessmentData(newData)
    }

    const changeStatus = (newData:any) => {
        if (newData.isValidate) {
            newData.ratragage = false
            newData.noRatragage = false
            setRattrapage(false)
            setNoRattrapage(false)
            newData.status = "Terminé"
        } else if (newData.isNotValidate) {
            newData.ratragage = true
            newData.noRatragage = false
            setRattrapage(true)
            setNoRattrapage(false)
            newData.status = "Echec"
        } else {
            newData.ratragage = false
            newData.noRatragage = false
            setRattrapage(false)
            setNoRattrapage(false)
            newData.status = "Validation"
        }
        // console.log(newData)
    }

    const displayContent = () => {
        switch (assessmentData.urlEval.split(".")[1]) {
            case "pdf":
                return (
                    <iframe
                        className={"content"}
                        src={assessmentData.urlEval}
                        title="PDF player">
                    </iframe>
                )
            default:
                return (
                    <iframe
                        className={"content"}
                        src={assessmentData.urlEval}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )
        }
    }

    const studentName = assessmentData.student.firstName + " " + assessmentData.student.name;

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={studentName}  logout={true}/>
            <section className={"max_width_container"}>
                <div className={"assessment_container-open max_width"}>
                    <h1>Contenu :</h1>
                    <h3>{assessmentData.lesson.title}</h3>
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
                                <p>Non</p>
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
                    {assessmentData.isNotValidate ?
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
                                    propsSetValue={{valuToChange: "rattrapage"}}
                                    value={rattrapage}
                                />
                            </span>
                                <span>
                                <p>Non</p>
                                <Checkbox
                                    name={"checkNo"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{valuToChange: "noRattrapage"}}
                                    value={noRattrapage}
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
                            value={assessmentData.note}
                        />
                    </div>

                    <button className={"button"} onClick={() => {
                        console.log(assessmentData)
                    }}>Valider
                    </button>
                </div>
            </section>
        </>
    );
}
