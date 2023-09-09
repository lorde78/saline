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
export default function User_preview_card({
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
            case "Non commencé":
                statusColor = "gray"
                break;

        }
        return (
            <div className={"preview_card_status"}>
                <span className={"status_color status_color-" + statusColor}/>
                <p>{status}</p>
            </div>
        )
    }

    return (
        <NavLink to={id.toString()} className={"preview_card"}>
            <div className={"banner_image"}>
                <img src={imgLink} alt={""}/>
            </div>
            <div className={"preview_card_content"}>
                <div className={"content_header"}>
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
