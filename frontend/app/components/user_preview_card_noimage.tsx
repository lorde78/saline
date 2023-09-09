import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number
    title: string
    professor: string
    status: string
};
export default function User_preview_card_noimage({
                                                      id,
                                                      title,
                                                      professor,
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
            <div className={"preview_card_content"}>
                <div className={"content_header"}>
                    <p>{title}</p>
                    <div className={"header_content-right"}>
                        {setStatus()}
                        {professor}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}
