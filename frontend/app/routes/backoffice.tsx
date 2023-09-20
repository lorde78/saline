import type {V2_MetaFunction} from "@remix-run/node";
import {NavLink} from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import Form_login from "~/components/form_login";
import {useGlobalEffect} from "~/helper/globalHelper";
import React, {useContext, useEffect, useState} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate} from "react-router-dom";
import {isLogged} from "~/helper/isLogged";
import useGetCurrentUserRoles from "~/hook/useGetCurrentRoles";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";

type NavLinkProps = {
    className?: string;
    to: string;
};

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
    ];
}

export default function Backoffice() {
    useGlobalEffect("backoffice");
    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [userRoles, setUserRoles] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<string>('');
    const getCurrentUser = useGetCurrentElement();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const currentUserId = await useGetCurrentUserId(signin);
                    setLoader(true);
                    getCurrentUser('user', currentUserId).then((r: any) => {
                        if (currentUser === '') {
                            setCurrentUser(r.profilePicture);
                            setUserRoles(useGetCurrentUserRoles(signin));
                            setLoader(true);
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [signin, currentUser, getCurrentUser]);

    return (
        <>
            {loader ? (
                <>
                    <NavLink className={"image_authentication"} to={"/"}>
                        <img
                            src={"https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"}/>
                    </NavLink>
                    <section className={"max_width_container"}>
                        <div className={"backoffice_container max_width"}>
                            {userRoles ? (
                                //@ts-ignore
                                userRoles.includes("ROLE_ADMIN") || userRoles.includes("ROLE_PEDAGO") || userRoles.includes("ROLE_PEDAGO") ? (
                                    <>
                                        <NavLink className={"button"} to={"trainings"}>
                                            Parcours
                                        </NavLink>
                                        <NavLink className={"button"} to={"courses"}>
                                            Cours
                                        </NavLink>
                                        <NavLink className={"button"} to={"classroom"}>
                                            Classes
                                        </NavLink>
                                        <NavLink className={"button"} to={"assessments"}>
                                            Évaluations
                                        </NavLink>
                                    </>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                            {userRoles ? (
                                //@ts-ignore
                                userRoles.includes("ROLE_ADMIN") ? (
                                    <NavLink className={"button"} to={"users"}>
                                        Users
                                    </NavLink>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                            {userRoles ? (
                                //@ts-ignore
                                userRoles.includes("ROLE_ADMIN") || userRoles.includes("ROLE_MARKET") ? (
                                    <NavLink className={"button"} to={"formulas"}>
                                        Formules
                                    </NavLink>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                            {/*<NavLink className={"button"} to={"banners"}>*/}
                            {/*    Bannières*/}
                            {/*</NavLink>*/}
                        </div>
                    </section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}