import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import formula from "~/styles/formule.css";
import Header_section_page from "~/kits/header_section_page";
import {useContext, useEffect, useState} from "react";
import UserInfos from "~/kits/userInfos";
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import {Slider} from "~/components/slider";
import Select from "~/kits/select";
import {useGlobalEffect} from "~/helper/globalHelper";
import {signinContext} from "~/context/signinContext";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import Loader from "~/kits/loader";
import {useNavigate} from "react-router-dom";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formula},
        {rel: 'stylesheet', href: styleRefacto},
    ];
}


export default function Backoffice_Users_UserId() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()
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

    const [role, setRole] = useState("")
    const [roleData, setRoleData] = useState([
        {value: "User", option: "ROLE_USER"},
        {value: "Responsable pédagogique", option: "ROLE_PEDAGO"},
        {value: "Professeur", option: "ROLE_PROF"},
        {value: "Marketing", option: "ROLE_MARKET"},
        {value: "Admin", option: "ROLE_ADMIN"},
    ])
    const [roleSelected, setRoleSelected] = useState(0)

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page numberUndoPage={1} title={currentUser.firstName + " " + currentUser.lastName}
                                         logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"main_section_container-flex margin-top-20 max_width"}>
                            <div className={"pp_card_small"}>
                                <img src={currentUser.profilePicture}/>
                            </div>
                            <h2>Role :</h2>
                            <Select
                                optionSelected={roleSelected}
                                setOptionSelected={setRoleSelected}
                                contents={roleData}
                                setValue={setRole}
                                propsSetValue={""}
                            />
                            <button className={"button"}>Valider</button>
                        </div>
                    </section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}