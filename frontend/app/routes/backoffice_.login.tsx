import { type V2_MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import Form_login from "~/components/form_login";
import { useGlobalEffect } from "~/helper/globalHelper";
import {redirectFromLoginIfLogged} from "~/helper/redirectFromLoginIfLogged";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: authentication }
    ];
}

export default function Backoffice_Login() {
    useGlobalEffect("backoffice");

    return (
        <div className={"authentication_container"}>
            <NavLink className={"image_authentication"} to={"/"}>
                <img
                    src={"https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"}
                    alt="Logo"
                />
            </NavLink>
            <section className={"max_width_container"}>
                <div className={"max_width"} style={{ textAlign: "center", marginTop: "40px" }}>
                    <h1>Admin</h1>
                    <Form_login />
                </div>
            </section>
        </div>
    );
}