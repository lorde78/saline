import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import formula from "~/styles/formule.css";
import Header_section_page from "~/kits/header_section_page";
import {useContext, useEffect, useState} from "react";
import Backoffice_users_carde from "~/components/backoffice_users_carde"
import {useGlobalEffect} from "~/helper/globalHelper";
import {signinContext} from "~/context/signinContext";
import useGetAllElements from "~/hook/useGetAllElements";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formula},
        {rel: 'stylesheet', href: styleRefacto},
    ];
}


export default function Backoffice_Users() {
    useGlobalEffect()
    isLogged("backoffice");
    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [users, setUsers] = useState<any>([]);
    const getAllUsers = useGetAllElements();

    const getUsers = async () => {
        const currentUsers = await getAllUsers("user", "");
        setUsers(currentUsers);
        setLoader(true);
    };

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Liste des utilisateurs"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"main_section_container-flex margin-top-20 max_width"}>
                    {users.map((user: any, i: number) => {
                            return (
                                <Backoffice_users_carde
                                    id={user.id}
                                    name={user.firstName + " " + user.name}
                                    imgLink={user.profilePicture}
                                    formula={user.formula || "Gratuit"}
                                    createdAt={user.createdAt}
                                />
                            )
                        }
                    )}
                </div>
            </section>
        </>
    );
}