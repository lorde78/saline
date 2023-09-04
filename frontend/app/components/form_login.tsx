import Input from "~/kits/input";
import {useState} from "react";
import useLogin from "~/hook/useLogin";

export default function Form_login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = useLogin()

    const submit = (e:any) => {
        e.preventDefault()
        //login(email,password)
        console.log("hey")
    }

    return (
        <form className={"authentication_form_container"}>
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>
            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>
            <button className={"button"} type="submit" onClick={(e) => submit(e)}>Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}