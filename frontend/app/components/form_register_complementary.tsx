import Input from "~/kits/input";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import Select_image from "~/kits/select_image";
import {useState} from "react";
import {useSelector} from "react-redux";
import SigninReducer from "~/reducer/signinReducer";

export default function Form_register_complementary() {
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState("")
    const [genderData, setGenderData] = useState([
        {value: "Quel est ton Genre", option: ""},
        {value: "Homme", option: "Men"},
        {value: "Femme", option: "Woman"},
        {value: "Autre", option: "Other"}
    ])
    const [genderSelected, setGenderSelected] = useState(0)
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [privacy, setPrivacy] = useState(false)

    const changeGender = (value: string, id: number) => {
        setGenderSelected(id)
        setGender(value)
    }
    return (
        <form className={"authentication_form_container"} action="" method="post">
            <Select_image/>
            <Select
                optionSelected={genderSelected}
                setOptionSelected={setGenderSelected}
                contents={genderData}
                setValue={changeGender}
                propsSetValue={""}

            />
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