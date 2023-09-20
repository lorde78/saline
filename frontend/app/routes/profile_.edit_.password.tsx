import 'remixicon/fonts/remixicon.css'
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import UserInfos from "~/kits/userInfos";
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import profileStyles from "~/styles/profileStyle.css";
import EditUserProfile from "~/components/editUserProfile";
import Form_login from "~/components/form_login";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";
import inputStyles from "~/styles/input.css";
import EditPassword from "~/components/editPassword";
import EditFormule from '~/components/editFormule';
import formuleStyles from "~/styles/formule.css";
import Formation from '~/kits/formations';
import Header from "~/components/header";
import Header_section_page from "~/kits/header_section_page";
import React, {useContext, useEffect, useState} from "react";
import Footer from "~/components/footer";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useGlobalEffect} from "~/helper/globalHelper";
import {signinContext} from "~/context/signinContext";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: profileStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Profile_Edit_Password() {
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
            <Header/>
            <Header_section_page numberUndoPage={2} title={"Modifier mon password"} logout={true}/>
            <main className={"max_width_container margin-top-20"}>
                <div className={"main_section_container-grid margin-top-20 max_width"}>
                    <div className="profile-page">
                        <EditPassword userInfo={currentUser}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}