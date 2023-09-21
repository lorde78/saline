import type {V2_MetaFunction} from "@remix-run/node";
import {NavLink, Outlet, useLocation} from "@remix-run/react";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import {useGlobalEffect} from "~/helper/globalHelper";
import {CSSProperties} from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import {redirectFromLoginIfLogged} from "~/helper/redirectFromLoginIfLogged";

type NavLinkProps = {
    className?: string;
    to: string;
    style?: CSSProperties;
};

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [
        {rel: "stylesheet", href: resetStyles},
        {rel: "stylesheet", href: styles},
        {rel: "stylesheet", href: input},
        {rel: "stylesheet", href: authentication},
    ];
}

export default function Authentication() {
    useGlobalEffect("");

    return (
        <>
            <Header/>
            <main className={"max_width_container margin-top-20"}>
                <div className={"authentication_container"}>
                    <NavLink className={"image_authentication"} to={"/"} style={{}}>
                        <img
                            src={
                                "https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"
                            }
                            style={{}} // Ajoutez un style vide ou personnalisé si nécessaire
                        />
                    </NavLink>
                    <section className={"max_width_container"}>
                        <div className={"authentication_container-home max_width"}>
                            <div>
                                <NavLink className={"button"} to={"register"} style={{}}>
                                    Inscription
                                </NavLink>
                                <NavLink className={"button button_dark"} to={"login"} style={{}}>
                                    Connexion
                                </NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}
