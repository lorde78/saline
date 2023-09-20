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
    const data = assessmentData.assessmentData;
    const setData = assessmentData.setAssessmentData;

    const [isValidate, setIsValidate] = useState(false)
    const [isNotValidate, setIsNotValidate] = useState(false)
    const [rattrapage, setRattrapage] = useState(false)
    const [noRattrapage, setNoRattrapage] = useState(false)

    const changeValue = (value:any, props:{valuToChange:string}) => {
        let newData = {...data}
        console.log(newData);
        switch (props.valuToChange) {
            case "note" :
                break
            case "isValidate" :
                setIsValidate(value)
                setIsNotValidate(false)
                changeStatus(newData)
                break
            case "isNotValidate" :
                setIsValidate(false)
                setIsNotValidate(value)
                changeStatus(newData)
                break
            case "rattrapage" :
                setRattrapage(value)
                setNoRattrapage(false)
                break
            case "noRattrapage" :
                setRattrapage(false)
                setNoRattrapage(value)
                break
        }
        setData(newData)
    }

    const changeStatus = (newData:any) => {
        if (newData.isValidate) {
            setRattrapage(false)
            setNoRattrapage(false)
            newData.status = "Terminé"
        } else if (newData.isNotValidate) {
            setRattrapage(true)
            setNoRattrapage(false)
            newData.status = "Echec"
        } else {
            setRattrapage(false)
            setNoRattrapage(false)
            newData.status = "Validation"
        }
        // console.log(newData)
    }

    const displayContent = () => {
        switch (data.urlEval.split(".")[1]) {
            case "pdf":
                return (
                    <iframe
                        className={"content"}
                        src={data.urlEval}
                        title="PDF player">
                    </iframe>
                )
            default:
                return (
                    <iframe
                        className={"content"}
                        src={data.urlEval}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )
        }
    }

    const studentName = data.student.firstName + " " + data.student.name;

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={studentName}  logout={true}/>
            <section className={"max_width_container"}>
                <div className={"assessment_container-open max_width"}>
                    <h1>Contenu :</h1>
                    <h3>{data.lesson.title}</h3>
                    {displayContent()}
                    <div className={"assessment_section" }>
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
                    {data.isNotValidate ?
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
                            value={data.note}
                        />
                    </div>

                    <button className={"button"} onClick={() => {
                        console.log(data)
                    }}>Valider
                    </button>
                </div>
            </section>
        </>
    );
}
