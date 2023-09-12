import {NavLink, useLocation} from "@remix-run/react";
import editLink from "~/helper/editLink";

type Props = {
    title: string
    numberUndoPage:number
};


export default function Header_section_page({title, numberUndoPage}: Props) {
    const editPath = editLink(numberUndoPage)

    return (
        <header className={"header_section_page"}>
            <nav>
                <NavLink to={editPath}>
                    <i className="ri-arrow-left-line"></i>
                </NavLink>
            </nav>
            <div><h1>{title}</h1></div>
        </header>
    )
}

