import Input from "~/kits/input";
import {useState,useContext} from "react";
import useLogin from "~/hook/useLogin";
import {NavLink, useLocation} from "@remix-run/react";
import {useNavigate} from "react-router-dom";
import editLink from "~/helper/editLink";

export default function Form_login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    let location = useLocation()
    let path = location.pathname

    const login = useLogin()

    const submit = async (e:any) => {
        e.preventDefault()
        const response = await login(email,password)

        switch(response.status) {
            case 401:
            case 404:
            case 400:
                console.log(response.data.message);
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
        <form className={"authentication_form_container"}>
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>
            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>
            <button className={"button"} type="submit" onClick={(e:any) => submit(e)} >Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}