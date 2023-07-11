import Input from "~/kits/input";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import Select_image from "~/kits/select_image";
import {useState} from "react";

export default function Form_register_complementary() {
    const [birthDate, setBirthDate] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [privacy, setPrivacy] = useState(false)

    return (
        <form action="" method="post">
            <h1>Inscription</h1>
            <Select_image />
            <Select defaultContent={"Quel est ton genre ?"} contents={[{value:"Men", option:"Homme"},{value:"Woman", option:"Femme"}, {value:"Other", option:"Autre"}]} />
            <Input name={"BirthDate"} type={"date"} placeholder={"Date de naissance"}
                   setValue={setBirthDate} propsSetValue={""} value={birthDate}/>
            <Input name={"Country"} type={"text"} placeholder={"Pays"}
                   setValue={country} propsSetValue={""} value={setCountry}/>
            <Input name={"Address"} type={"text"} placeholder={"Adresse"}
                   setValue={setAddress} propsSetValue={""} value={address}/>
            <Input name={"PostalCode"} type={"text"} placeholder={"Code postal"}
                   setValue={setPostalCode} propsSetValue={""} value={postalCode}/>
            <Checkbox name={"privacy"}
                      type={"checkbox"}
                      text={"J’ai lu et j’accepte la Politique de confidentialité"}
                      setValue={setPrivacy}
                      propsSetValue={""} value={privacy}/>

            <button className={"button"} type="submit">Inscription</button>
        </form>
    )
}