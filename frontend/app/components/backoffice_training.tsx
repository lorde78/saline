import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number,
    title: string,
    professor: string,
    description: string
    imgLink: string
};
export default function Backoffice_training({
                                                 id,
                                                 title,
                                                 professor,
                                                 description,
                                                 imgLink,
                                             }: Props) {


    return (
        <div className={"backoffice_training_container"}>
            <div className={"training_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"training_info"}>
                <div className={"training_header_info"}>
                    <p>{title}</p>
                    <p>{professor}</p>
                </div>
                <p className={"training_description"}>
                    {description}
                </p>
                <div className={"training_button"}>
                    <NavLink className={"button"} to={id.toString()}>
                        Modifier
                    </NavLink>
                    <button className={"button button_alert"}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
