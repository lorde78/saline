import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Checkbox from "~/kits/checkbox";
import Textarea from "~/kits/textarea";
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number,
    title: string,
    author: {
        firstName: string,
        name: string
    },
    description: string,
    imgLink: string
};
export default function Backoffice_classroom({
                                                 id,
                                                 title,
                                                 author,
                                                 description,
                                                 imgLink,
                                             }: Props) {


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
                    <button className={"button button_alert"}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
