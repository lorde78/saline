import 'remixicon/fonts/remixicon.css';
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import profileStyles from "~/styles/profileStyle.css";
import EditUserProfile from "~/components/editUserProfile";
import inputStyles from "~/styles/input.css";
import formuleStyles from "~/styles/formule.css";
import {useGlobalEffect} from "~/helper/globalHelper";
import React, {useContext, useEffect, useState} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Header_section_page from "~/kits/header_section_page";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: profileStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Profile() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [currentUser, setCurrentUser] = useState<any>("")
    const getCurrentUser = useGetCurrentElement();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const currentUserId = await useGetCurrentUserId(signin);
                    setLoader(true)
                    getCurrentUser("user", currentUserId).then((r: any) => {
                        if (currentUser === "") {
                            setCurrentUser(r);
                            setLoader(true)
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser()
    }, [signin])

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1} title={"Modifier mon profil"} logout={true} />
                    <main className={"max_width_container margin-top-20"}>
                        <div className={"main_section_container-grid margin-top-20 max_width"}>
                            <div className="profile-page">
                                <EditUserProfile userInfo={currentUser}/>
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <div className="profile-page"/>
            )}
        </>
    )
}