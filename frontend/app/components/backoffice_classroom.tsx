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

    const deleteLesson = useDeleteElement()
    const getCurrentId = getIdFromUrl(1)

    const submit = (e) => {
        if(!getCurrentId) {
            deleteLesson(creation_type,id)
        }

        window.location.reload()
    }

    return (
        <div className={"backoffice_classroom_container"}>
            <div className={"classroom_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"classroom_info"}>
                <div className={"classroom_header_info"}>
                    <p>{title}</p>
                    <p>{author.firstName} {author.name}</p>
                </div>
                <p className={"classroom_description"}>
                    {description}
                </p>
                <div className={"classroom_button"}>
                    <NavLink className={"button"} to={id.toString()+"/edit"}>
                        Modifier
                    </NavLink>
                    <button className={"button button_alert"} type="submit" onClick={(e) => submit(e)}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
