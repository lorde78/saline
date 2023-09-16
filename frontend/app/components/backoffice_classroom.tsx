import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Checkbox from "~/kits/checkbox";
import Textarea from "~/kits/textarea";
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import useDeleteElement from "~/hook/useDeleteElement";
import useRemoveLessonFromTraining from "~/hook/useRemoveLessonFromTraining";
import getIdFromUrl from "~/helper/getIdFromUrl";

type Props = {
    id: number,
    title: string,
    author: {
        firstName: string,
        name: string
    },
    description: string,
    imgLink: string,
    creation_type: string
};
export default function Backoffice_classroom({
                                                 id,
                                                 title,
                                                 author,
                                                 description,
                                                 imgLink,
                                                 creation_type
                                             }: Props) {

    const deleteElement = useDeleteElement()
    const getCurrentId = getIdFromUrl(1)

    const submit = (e:any) => {
        if(!getCurrentId) {
            deleteElement(creation_type,id)
        }

        window.location.reload()
    }

    return (
        <div className={"preview_card"}>
            <div className={"banner_image"}>
                <img src={imgLink} alt={"bannière de la classe"}/>
            </div>
            <div className={"preview_card_content"}>
                <div className={"content_header"}>
                    <p>{title}</p>
                    <p>{author.firstName} {author.name}</p>
                </div>
                <p className={"training_description margin-top-20"}>
                    {description}
                </p>
                <div className={"preview_card_button margin-top-20"}>
                    <NavLink className={"button"} to={id.toString()+"/edit"}>
                        Modifier
                    </NavLink>
                    <button className={"button button_alert"} type="submit" onClick={(e) => submit(e)}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
