import Input from "~/kits/input";
import {NavLink, useLocation} from "@remix-run/react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {RegisterAction} from "~/action/registerAction";

export default function Form_register() {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const sendForm = () => {
      let formData = {
          "email" : email,
          "firstname" : firstName,
          "lastname" : lastName,
          "password" : password
      }

      dispatch(RegisterAction(formData))
    }
    return (
        <form className={"authentication_form_container"} action="" method="post">
            <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={""} value={email}/>

            <Input name={"firstname"} type={"text"} placeholder={"Prénom"}
                   setValue={setFirstName} propsSetValue={""} value={firstName}/>

            <Input name={"lastname"} type={"text"} placeholder={"Nom"}
                   setValue={setLastName} propsSetValue={""} value={lastName}/>

            <Input name={"password"} type={"password"} placeholder={"Mot de passe"}
                   setValue={setPassword} propsSetValue={""} value={password}/>

            <NavLink className={"button"} type="submit" to={"complementary"}>Suivant</NavLink>
            <a href={""} className={"sub_link"}>Voir la Politique confidentialité</a>
        </form>
    )
}