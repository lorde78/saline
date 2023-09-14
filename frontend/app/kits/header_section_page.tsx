import {NavLink, useLocation} from "@remix-run/react";
import editLink from "~/helper/editLink";

type Props = {
    title: string
    numberUndoPage: number
    logout?: boolean
    edit?: boolean
};


export default function Header_section_page({title, numberUndoPage, edit, logout}: Props) {
    const editPath = editLink(numberUndoPage)
    const editPagePath = editLink(1)

    return (
        <header className={"header_section_page"}>
            <nav>
                <NavLink to={editPath}>
                    <i className="ri-arrow-left-line"></i>
                </NavLink>
            </nav>
            <div><h1>{title}</h1></div>
            {edit ?
                <NavLink to={editPagePath}>
                    <i className="ri-edit-line"></i>
                </NavLink>
                :
                <></>
            }
            {logout ?
                <nav>
                    <NavLink to={"/logout"}>
                        <i className="ri-logout-circle-line"></i>
                    </NavLink>
                </nav>
                :
                <></>
            }
        </header>
    )
}

