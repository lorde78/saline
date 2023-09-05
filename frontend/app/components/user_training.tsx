import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number
    title: string
    professor: string
    description: string
    imgLink: string
    status: string
};
export default function User_training({
                                          id,
                                          title,
                                          professor,
                                          description,
                                          imgLink,
                                          status
                                      }: Props) {


    const setStatus = () => {
        let statusColor
        switch (status) {
            case "En cours":
                statusColor = "yellow"
                break;
            case "Terminé":
                statusColor = "green"
                break;
            case "A faire":
                statusColor = "gray"
                break;

        }
        return (
            <div className={"training_status"}>
                <span className={"status_color status_color-" + statusColor}/>
                <p>{status}</p>
            </div>
        )
    }

    return (
        <NavLink to={id.toString()} className={"backoffice_training_container"}>
            <div className={"training_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"training_info"}>
                <div className={"training_header_info"}>
                    <p>{title}</p>
                    {setStatus()}
                </div>
                <p className={"training_description"}>
                    {description}
                </p>
            </div>
        </NavLink>
    );
}
