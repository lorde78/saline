import {NavLink, useLocation} from "@remix-run/react";

type Props = {
    title: string
};


export default function Header_section_page({title}: Props) {

    const editLink = () => {
        let path = useLocation().pathname
        let newPath = path.split("/")
        let pathArray = newPath.pop()
        // @ts-ignore
        return newPath.toString().replaceAll(",", "/")
    }

    return (
        <header className={"header_section_page"}>
            <nav>
                <NavLink to={editLink()}>
                    <i className="ri-arrow-left-line"></i>
                </NavLink>
            </nav>
            <div><h1>{title}</h1></div>
        </header>
    )
}

