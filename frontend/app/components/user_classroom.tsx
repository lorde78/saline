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
    professor: string,
    description: string
    imgLink: string
};
export default function User_classroom({
                                                 id,
                                                 title,
                                                 professor,
                                                 description,
                                                 imgLink,
                                             }: Props) {


    return (
        <NavLink to={id.toString()} className={"big_banner_image"}>
            <div className={"classroom_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"classroom_info"}>
                <div className={"classroom_header_info"}>
                    <p>{title}</p>
                    <p>{professor}</p>
                </div>
                <p className={"classroom_description"}>
                    {description}
                </p>
            </div>
        </NavLink>
    );
}
