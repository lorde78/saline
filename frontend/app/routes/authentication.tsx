import type {V2_MetaFunction} from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";


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
        {rel: 'stylesheet', href: input}
    ]
}

export default function Authentication() {
    return (
        <section className={"Authentication_container"}>
            <header>

            </header>
            <div>
                <NavLink  className={"button"} to={"/authentication/register"}>
                    Inscription
                </NavLink >
                <NavLink  className={"button button_dark"} to={"/authentication/login"}>
                    {/*<NavLink className={"button button_dark"} to={"/cours/edit"}>*/}
                    Connexion
                </NavLink >
                <Outlet />
            </div>
        </section>
    );
}
