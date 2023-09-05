import {useState} from "react";
import Input from "~/kits/input";

export default function Email_subscription() {

    const [email, setEmail] = useState("")

    return (
        <div className="email_newlater_container">
            <h2>S'inscrire à la newsletter</h2>
            <div>
                <Input
                    name={"EmailNewslater"}
                    type={"text"} placeholder={"Votre email"}
                    setValue={setEmail}
                    propsSetValue={""}
                    value={email}
                />
                <button className={"button"}>Ok</button>
            </div>
        </div>
    )
}