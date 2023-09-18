import type { V2_MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import Form_login from "~/components/form_login";
import { useGlobalEffect } from "~/helper/globalHelper";
import {useContext, useEffect} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate} from "react-router-dom";
import {isLogged} from "~/helper/isLogged";

type NavLinkProps = {
    className?: string;
    to: string;
};

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

export default function Backoffice() {
    useGlobalEffect("backoffice");

    return (
        <>
            <NavLink className={"image_authentication"} to={"/"}>
                <img src={"https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"} />
            </NavLink>
            <section className={"max_width_container"}>
                <div className={"backoffice_container max_width"}>
                    <NavLink className={"button"} to={"trainings"}>
                        Parcours
                    </NavLink>
                    <NavLink className={"button"} to={"courses"}>
                        Cours
                    </NavLink>
                    <NavLink className={"button"} to={"classroom"}>
                        Classes
                    </NavLink>
                    <NavLink className={"button"} to={"users"}>
                        Users
                    </NavLink>
                    <NavLink className={"button"} to={"assessments"}>
                        Évaluations
                    </NavLink>
                    <NavLink className={"button"} to={"formulas"}>
                        Formules
                    </NavLink>
                    {/*<NavLink className={"button"} to={"banners"}>*/}
                    {/*    Bannières*/}
                    {/*</NavLink>*/}
                </div>
            </section>
        </>
    );
}