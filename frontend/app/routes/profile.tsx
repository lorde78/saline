import 'remixicon/fonts/remixicon.css';
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import UserInfos from "~/kits/userInfos";
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import profileStyles from "~/styles/profileStyle.css";
import inputStyles from "~/styles/input.css";
import formuleStyles from "~/styles/formule.css";
import userInfos from "~/styles/userInfos.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { useGlobalEffect } from '~/helper/globalHelper';
import {useContext, useEffect, useState} from "react";
import {signinContext} from "~/context/signinContext";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import Loader from "~/kits/loader";
import {useNavigate} from "react-router-dom";

export function links() {
  return [{rel: 'stylesheet', href: resetStyles},  {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: profileStyles}, {rel: 'stylesheet', href: userInfos}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Profile() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()
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