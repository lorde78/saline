import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Checkbox from "~/kits/checkbox";
import Textarea from "~/kits/textarea";

type Props = {
    id: number,
    studen: string,
    course: string,
    evaluationType: string
    contente: string
    note: string
    isValidate: boolean
    isNotValidate: boolean
    ratragage: boolean
    noRatragage: boolean
    status: string
    setValue: any
};
export default function Backoffice_assessment({
                                                  id,
                                                  studen,
                                                  course,
                                                  evaluationType,
                                                  contente,
                                                  note,
                                                  isValidate,
                                                  isNotValidate,
                                                  ratragage,
                                                  noRatragage,
                                                  status,
                                                  setValue
                                              }: Props) {
    const [editing, setEditing] = useState(false)

    const statusColor = () => {
        switch (status) {
            case "en attente": {
                return (
                    <span className={"status_color status_color-yellow"}></span>
                )
            }
            case "validé": {
                return (
                    <span className={"status_color status_color-green"}></span>
                )
            }
            case "raté": {
                return (
                    <span className={"status_color status_color-red"}></span>
                )
            }
        }
    }

    const displayContent = () => {
        switch (evaluationType) {
            case "video":
                return (
                    <iframe
                        className={"content"}
                        src={contente}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )
        }
    }
    return (
        <>
            {editing ?
                <div className={"assessment_container-open"}>
                    <h1>Contenu : {studen}</h1>
                    <h3>{course}</h3>
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
                                    setValue={setValue}
                                    propsSetValue={{id: id, valuToChange: "isValidate"}}
                                    value={isValidate}
                                />
                            </span>
                            <span>
                                <p>Nom</p>
                                <Checkbox
                                    name={"checkNo"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={setValue}
                                    propsSetValue={{id: id, valuToChange: "isNotValidate"}}
                                    value={isNotValidate}
                                />
                            </span>
                        </div>
                    </div>
                    {isNotValidate ?

                        <div className={"assessment_section"}>
                            <p>Ratrapage</p>
                            <div>
                            <span>
                                <p>Oui</p>
                                <Checkbox
                                    name={"checkYes"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={setValue}
                                    propsSetValue={{id: id, valuToChange: "ratragage"}}
                                    value={ratragage}
                                />
                            </span>
                                <span>
                                <p>Nom</p>
                                <Checkbox
                                    name={"checkNo"}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={setValue}
                                    propsSetValue={{id: id, valuToChange: "noRatragage"}}
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
                            setValue={setValue}
                            propsSetValue={{id: id, valuToChange: "note"}}
                            value={note}
                        />
                    </div>

                    <button className={"button"} onClick={() => {
                        setEditing(false)
                    }}>Valider
                    </button>
                </div>
                :

                <div className={"assessment_container"}>
                    <div onClick={() => {
                        setEditing(true)
                    }}>
                        <div className={"assessment_container-left"}>
                            <p>{studen}</p>
                            <p>{course}</p>
                        </div>
                        <div className={"assessment_container-right"}>
                            <p>{status}</p>
                            {statusColor()}
                        </div>
                    </div>
                    <button className={"button"}>Envoyer</button>
                </div>
            }
        </>
    );
}
