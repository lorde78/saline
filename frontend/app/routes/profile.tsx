import 'remixicon/fonts/remixicon.css';
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
import Footer from "~/components/footer";


import { useGlobalEffect } from '~/helper/globalHelper';
import {useContext, useEffect, useState} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import Loader from "~/kits/loader";

export function links() {
  return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: profileStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Profile() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [currentUser,setCurrentUser] = useState<any>("")
    const getCurrentUser = useGetCurrentElement();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const currentUserId = await useGetCurrentUserId(signin);
                    setLoader(true)
                    getCurrentUser("user",currentUserId).then((r: any) => {
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
                    <main className={"max_width_container margin-top-20"}>
                        <div className={"main_section_container-grid margin-top-20 max_width"}>
                            <div className="profile-page">
                                <UserInfos data={currentUser}/>
                                <Formule subscription="Annuel" />
                                <Accordion type="formations" title="Vos formations" picto="ri-book-mark-line" />
                                <Accordion type="comments" title="Vos commentaires" picto="ri-message-3-line" />
                                <Accordion type="graduations" title="Vos certifications" picto="ri-graduation-cap-line" />
                                {/* <Formation /> */}
                                {/* <EditUserProfile userInfo={userInfo} /> */}
                                {/* <EditPassword /> */}
                                {/* <Form_register_complementary /> */}
                                {/* <EditFormule /> */}
                            </div>
                        </div>
                    </main>

                    <Footer/>
                </>
                ) : (
                  <Loader/>
            )}
        </>
        )
}