import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number;
    title: string;
    type: string;
    status: string;
    disable?: boolean;
};
export default function User_preview_card_noimage({
                                                      id,
                                                      title,
                                                      type,
                                                      status,
                                                      disable
                                                  }: Props) {
    title = title.charAt(0).toUpperCase() + title.slice(1);

    const setStatus = () => {
        let statusColor;
        switch (status) {
            case "En cours":
                statusColor = "yellow";
                break;
            case "Terminé":
                statusColor = "green";
                break;
            case "A faire":
                statusColor = "gray";
                break;
            case "Non commencé":
                statusColor = "gray";
                break;

        }
        return (
            <div className={"preview_card_status"}>
                <span className={"status_color status_color-" + statusColor}/>
                <p>{status}</p>
            </div>
        )
    }

    const setType = () => {
        let typeText;
        switch (type) {
            case "video":
                typeText = "Vidéo";
                break;
            case "exercise/qcm":
                typeText = "QCM";
                break;
            case "exercise/bind_list":
                typeText = "Liste à relier";
                break;
            case "review":
                typeText = "Évaluation";
        }
        return (
            <p>{typeText}</p>
        )
    }

    return (
        <>
            {
                disable ? (
                    <div className={"preview_card"}>
                        <div className={"preview_card_content"}>
                            <div className={"content_header"}>
                                <p>{title}</p>
                                <div className={"header_content-right"}>
                                    {setStatus()}
                                    {setType()}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <NavLink to={id.toString()} className={"preview_card"}>
                        <div className={"preview_card_content"}>
                            <div className={"content_header"}>
                                <p>{title}</p>
                                <div className={"header_content-right"}>
                                    {setStatus()}
                                    {setType()}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )
            }
        </>
    );
}
