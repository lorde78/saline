import Input from "~/kits/input";
import {useState} from "react";

export default function Form_login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <form action="" method="post">
            <h1>Connexion</h1>
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>
            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>
            <button className={"button"} type="submit">Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}