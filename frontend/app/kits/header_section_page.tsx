import {NavLink, useLocation} from "@remix-run/react";
import editLink from "~/helper/editLink";
import useLogout from "~/hook/useLogout";

type Props = {
    title: string;
    numberUndoPage: number;
    logout?: boolean;
    edit?: boolean;
    status?: any;
};


export default function Header_section_page({title, status, numberUndoPage, edit, logout}: Props) {
    const editPath = editLink(numberUndoPage);
    const editPagePath = editLink(1);

    const logoutAction = useLogout();

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

            default:
                return (<></>)
        }
        return (
            <div className={"preview_card_status"}>
                <span className={"status_color status_color-" + statusColor}/>
                <p>{status}</p>
            </div>
        )
    }

    return (
        <header className={"header_section_page"}>
            <nav>
                <NavLink to={editPath}>
                    <i className="ri-arrow-left-line"></i>
                </NavLink>
            </nav>
            <div>
                <div>
                    <h1>{title}</h1>
                    {setStatus()}
                </div>
            </div>
            {edit ?
                <NavLink to={editPagePath}>
                    <i className="ri-edit-line"></i>
                </NavLink>
                :
                <></>
            }
            {logout ?
                <nav>
                    <button onClick={logoutAction} title={"Déconnexion"}>
                        <i className="ri-logout-circle-line"></i>
                    </button>
                </nav>
                :
                <></>
            }
        </header>
    )
}

