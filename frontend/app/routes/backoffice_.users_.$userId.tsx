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
import {isLogged} from "~/helper/isLogged";
import getIdFromUrl from "~/helper/getIdFromUrl";
import {useLocation} from "@remix-run/react";
import useUpdateUser from "~/hook/useUpdateUser";

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
    useGlobalEffect("backoffice");

    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [currentUser, setCurrentUser] = useState<any>("")
    const currentUserId = getIdFromUrl(0);
    const getCurrentUser = useGetCurrentElement();

    const updateUser = useUpdateUser()

    const [role, setRole] = useState("")
    const [roleData, setRoleData] = useState([
        {value: "User", option: "ROLE_USER"},
        {value: "Responsable pédagogique", option: "ROLE_PEDAGO"},
        {value: "Professeur", option: "ROLE_PROF"},
        {value: "Marketing", option: "ROLE_MARKET"},
        {value: "Admin", option: "ROLE_ADMIN"},
    ])
    const [roleSelected, setRoleSelected] = useState(0)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    setLoader(true)
                    await getCurrentUser("user", currentUserId).then((r: any) => {
                        if (currentUser === "") {
                            setCurrentUser(r);
                            setRole(r.roles[r.roles.length -1])
                            switch (r.roles[r.roles.length -1]) {
                                case "ROLES_USER":
                                    setRoleSelected(0)
                                    break;

                                case "ROLE_PEDAGO":
                                    setRoleSelected(1)
                                    break;

                                case "ROLE_PROF":
                                    setRoleSelected(2)
                                    break;

                                case "ROLE_MARKET":
                                    setRoleSelected(3)
                                    break;

                                case "ROLE_ADMIN":
                                    setRoleSelected(4)
                                    break;
                            }
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

    const submit = (e:any) => {
        e.preventDefault()
        let newRoles = null;
        switch(role) {
            case "User":
                newRoles = ["ROLE_USER"];
                break;

            case "Responsable pédagogique":
                newRoles = ["ROLE_USER","ROLE_PEDAGO"]
                break;

            case "Professeur":
                newRoles = ["ROLE_USER","ROLE_PROF"]
                break;

            case "Marketing":
                newRoles = ["ROLE_USER","ROLE_MARKET"]
                break;

            case "Admin":
                newRoles = ["ROLE_USER","ROLE_ADMIN"]
                break;
        }

        let formData = {
            "roles": newRoles
        }

        updateUser(formData,currentUserId,false,true)
        navigate(location.pathname)
    }

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page numberUndoPage={1} title={currentUser.firstName + " " + currentUser.name}
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
                            <button className={"button"} onClick={(e) => {submit(e)}}>Valider</button>
                        </div>
                    </section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}