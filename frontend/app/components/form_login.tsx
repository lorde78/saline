import Input from "~/kits/input";
import {useState,useContext} from "react";
import useLogin from "~/hook/useLogin";
import { NavLink } from "@remix-run/react";

export default function Form_login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = useLogin()

    const submit = (e:any) => {
        login(email,password)
    }

    return (
        <form className={"authentication_form_container"}>
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>
            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>
            <NavLink className={"button"} type="submit" onClick={(e:any) => submit(e)} to={"/"}>Connexion</NavLink>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}