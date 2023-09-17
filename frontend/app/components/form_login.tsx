import Input from "~/kits/input";
import React, {useState,useContext} from "react";
import useLogin from "~/hook/useLogin";
import {NavLink, useLocation} from "@remix-run/react";
import {useNavigate} from "react-router-dom";
import editLink from "~/helper/editLink";
import Notif from "~/kits/notif";

export default function Form_login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    let location = useLocation()
    let path = location.pathname

    const login = useLogin()

    const [responseStatusMessage, setResponseStatusMessage] = useState("")
    const [responseStatusTrue, setResponseStatusTrue] = useState(false)

    const submit = async (e:any) => {
        setResponseStatusTrue(false)
        e.preventDefault()
        const response = await login(email,password)

        switch(response.status) {
            case 401:
            case 404:
            case 400:
                setResponseStatusMessage("Informations invalides")
                setResponseStatusTrue(true)
                break;

            default:
                if(path.split("/")[1] === "/authentication/") {
                    navigate("/");
                } else {
                    navigate("/backoffice/");
                }
                break
        }
    }

    return (
        <form className={"authentication_form_container"} onSubmit={submit}>
            {responseStatusTrue ? (
                <Notif text={responseStatusMessage} type={"error"} />
            ) : (
                <></>
            )}
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>
            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>
            <button className={"button"} type="submit">Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}