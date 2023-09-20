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
    student: any,
    course: string,
    status: string
};
export default function Backoffice_assessment({
                                                  id,
                                                  student,
                                                  course,
                                                  status,
                                              }: Props) {

    const statusColor = () => {
        switch (status) {
            case "Validation": {
                return (
                    <span className={"status_color status_color-orange"}></span>
                )
            }
            case "Terminé": {
                return (
                    <span className={"status_color status_color-green"}></span>
                )
            }
            case "Echec": {
                return (
                    <span className={"status_color status_color-red"}></span>
                )
            }
        }
    }

    return (
        <>
            <NavLink to={id.toString()} className={"preview_card"}>
                <div className={"preview_card_content"}>
                    <div className={"content_header"}>
                        <div className={"header_content-left"}>
                            <p>{student.firstName} {student.name}</p>
                            <p>{course}</p>
                        </div>
                        <div className={"preview_card_status"}>
                            <p>{status}</p>
                            {statusColor()}
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}
