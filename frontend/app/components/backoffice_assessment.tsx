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
    studen: string,
    course: string,
    status: string
};
export default function Backoffice_assessment({
                                                  id,
                                                  studen,
                                                  course,
                                                  status,
                                              }: Props) {

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

    return (
        <>

            <NavLink className={"assessment_container"} to={useLocation().pathname + id}>
                <div className={"assessment_container-left"}>
                    <p>{studen}</p>
                    <p>{course}</p>
                </div>
                <div className={"assessment_container-right"}>
                    <p>{status}</p>
                    {statusColor()}
                </div>
            </NavLink>
        </>
    );
}
