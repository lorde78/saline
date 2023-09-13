import Input from "~/kits/input";
import { NavLink } from "@remix-run/react";
import { useState, useContext } from "react";
import { registerContext } from "~/context/registerContext";

export default function Form_register() {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    // @ts-ignore
    const [registerData,setRegister] = useContext(registerContext)


    const submit = () => {
        let formData = {
            "email" : email,
            "firstName" : firstName,
            "name" : lastName,
            "password" : password
        }
        setRegister(formData)
    }

    return (
        <form className={"authentication_form_container"}>
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>

            <Input name={"firstname"} type={"text"} placeholder={"Prénom"}
                   setValue={setFirstName} propsSetValue={""} value={firstName}/>

            <Input name={"lastname"} type={"text"} placeholder={"Nom"}
                   setValue={setLastName} propsSetValue={""} value={lastName}/>

            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>

            <NavLink className={"button"} type="submit" onClick={() => submit()} to={"complementary"}>Suivant</NavLink>
            <a href={""} className={"sub_link"}>Voir la Politique confidentialité</a>
        </form>
    )
}