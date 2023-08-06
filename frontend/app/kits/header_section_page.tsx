import {NavLink} from "@remix-run/react";
type Props = {
    title: string,
    link: string
};
export default function Header_section_page({title, link}: Props) {
    return (
        <header className={"header_section_page"}>
            <nav>
                <NavLink to={link}>
                    <i className="ri-arrow-left-line"></i>
                </NavLink>
            </nav>
            <div><h1>{title}</h1></div>
        </header>
    )
}

