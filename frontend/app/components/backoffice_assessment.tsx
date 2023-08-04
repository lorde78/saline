import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";

type Props = {
    id: number,
    studen: string,
    course: string,
    evaluationType: string
    contente: string
    isValidate: boolean
    ratragage: boolean
    status:string
    setValue: any
};
export default function Backoffice_assessment({
                                                  id,
                                                  studen,
                                                  course,
                                                  evaluationType,
                                                  contente,
                                                  isValidate,
                                                  ratragage,
                                                  status,
                                                  setValue
                                              }: Props) {
    const [editing, setEditing] = useState(false)

    return (
        <div className={"banner_edit_container"}>
            {editing ?
                <>
                    <h1>Contenu</h1>

                    <button className={"button"} onClick={() => {
                        setEditing(false)
                    }}>Valider
                    </button>
                </>
                :

                <div onClick={() => {
                    setEditing(true)
                }}>
                    <div className={"button_top"}>
                        <p>{studen}</p>
                        <p>{course}</p>
                    </div>
                    <div>
                        {status}
                        <span style={{}}></span>
                    </div>
                </div>
            }
        </div>
    );
}
