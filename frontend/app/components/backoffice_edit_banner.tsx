import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";

type Props = {
    id: number,
    name: string
    isActive: boolean
    title: string
    subTitle: string
    background: any
    color:string
    setValue: any
};
export default function Backoffice_edit_banner({
                                                   id,
                                                   name,
                                                   isActive,
                                                   title,
                                                   subTitle,
                                                   background,
                                                   color,
                                                   setValue
                                               }: Props) {
    const [editing, setEditing] = useState(false)

    return (
        <div className={"banner_edit_container"}>
            {editing ?
                <>
                    <h1>Infos</h1>
                    <Input
                        name={"title" + id}
                        type={"text"}
                        placeholder={"Titre"}
                        setValue={setValue}
                        propsSetValue={{id : id, valuToChange : "title"}}
                        value={title}
                    />
                    <Input
                        name={"subTitle" + id}
                        type={"text"}
                        placeholder={"Sous-Titre"}
                        setValue={setValue}
                        propsSetValue={{id : id, valuToChange : "subTitle"}}
                        value={subTitle}
                    />
                    <h3>couleur du text</h3>
                    <Color_picker value={color} setValue={setValue}
                                  propsSetValue={{id : id, valuToChange : "color"}}
                    />
                    <h3>couleur du fond</h3>
                    <Color_picker value={background} setValue={setValue}
                                  propsSetValue={{id : id, valuToChange : "background"}}
                    />
                    <button className={"button"} onClick={() => {
                        setEditing(false)
                    }}>Confirmer
                    </button>
                </>
                :

                <>
                    <div className={"button_top"}>
                        <p>Bannière : {name}</p>
                        <div>
                            <Switch_button name={"switch" + id} value={isActive} setValue={setValue} propsSetValue={{id : id, valuToChange : "isActive"}}/>
                            <button onClick={() => {
                                setEditing(true)
                            }}>
                                <i className="ri-pencil-line"></i>
                            </button>
                        </div>
                    </div>
                    <div className={"banner_preview"} style={{background: background}}>
                        <h3 style={{color: color}}>{title}</h3>
                        <p style={{color: color}}>{subTitle}</p>
                    </div>
                </>
            }
        </div>
    );
}
