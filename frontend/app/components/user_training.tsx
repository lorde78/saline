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
        switch (status) {
            case "En cours":
                return <div className={"training_status_circle training_status_circle_in_progress"}/>;
            case "Terminé":
                return <div className={"training_status_circle training_status_circle_finish"}/>;
            case "A faire":
                return <div className={"training_status_circle training_status_circle_waiting"}/>;

        }
        return (
            <div className={"training_status"}>
                <div className={"training_status_circle training_status_circle " + status}/>
                <p>{status}</p>
            </div>
        )
    }

    return (
        <div className={"backoffice_training_container"}>
            <div className={"training_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"training_info"}>
                <div className={"training_header_info"}>
                    <p>{title}</p>
                    <div>{setStatus()}</div>
                </div>
                <p className={"training_description"}>
                    {description}
                </p>
            </div>
        </div>
    );
}
