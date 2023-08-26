import type {V2_MetaFunction} from "@remix-run/node";
import {NavLink, Outlet, useLocation} from "@remix-run/react";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";


export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: authentication}
    ]
}

export default function Authentication() {
    return (
        <div className={"authentication_container"}>
            <NavLink className={"image_authentication"} to={"/"} >
                <img  src={"https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"} />
            </NavLink>
            <section className={"max_width_container"}>
                <div className={"authentication_container-home max_width"}>
                    <div>
                        <NavLink className={"button"} to={"register"}>
                            Inscription
                        </NavLink>
                        <NavLink className={"button button_dark"} to={"login"}>
                            Connexion
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
