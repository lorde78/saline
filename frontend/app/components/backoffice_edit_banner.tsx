import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";

type Props = {
    name: string
    isActive: boolean
    title: string
    subTitle: string
    background: any
    setIsActive: any
    setTitle: any
    setSubTitle: any
    setBackground: any
};
export default function Backoffice_edit_banner({
                                                   name,
                                                   isActive,
                                                   title,
                                                   subTitle,
                                                   background,
                                                   setIsActive,
                                                   setTitle,
                                                   setSubTitle,
                                                   setBackground
                                               }: Props) {
    const [editing, setEditing] = useState(false)

    return (
        <div className={"banner_edit_container"}>
            {editing ?
                <>
                    <h1>Infos</h1>
                    <Input
                        name={"title"}
                        type={"text"}
                        placeholder={"Titre"}
                        setValue={setTitle}
                        propsSetValue={""}
                        value={title}
                    />
                    <Input
                        name={"subTitle"}
                        type={"text"}
                        placeholder={"Sous-Titre"}
                        setValue={setSubTitle}
                        propsSetValue={""}
                        value={subTitle}
                    />
                    <Color_picker value={background} setValue={setBackground}/>
                    <button className={"button"} onClick={() => {setEditing(false)}}>Valider</button>
                </>
                :

                <>
                    <div className={"button_top"}>
                        <p>Bannière : {name}</p>
                        <div>
                            <Switch_button name={"switch1"} value={isActive} setValue={setIsActive} propsSetValue={""}/>
                            <button onClick={() => {setEditing(true)}}>
                                <i className="ri-pencil-line"></i>
                            </button>
                        </div>
                    </div>
                    <div className={"banner_preview"} style={{background: background}}>
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>
                </>
            }
        </div>
    );
}
