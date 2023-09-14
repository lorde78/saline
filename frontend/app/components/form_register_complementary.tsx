import Input from "~/kits/input";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import Select_image from "~/kits/select_image";
import { useState, useContext } from "react";
import { registerContext } from "~/context/registerContext";
import useRegister from "~/hook/useRegister";
import { NavLink } from "@remix-run/react";

export default function Form_register_complementary() {
    // @ts-ignore
    const [registerData,setRegister] = useContext(registerContext)

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

    const register = useRegister()

    const submit = (e:any) => {
        let formData = {
            ...registerData,
            "genre": gender,
            "nationality": country,
            "birthDate": birthDate,
            "postalAddress":  address + ", " + postalCode
        }
        register(formData)
    }

    return (
        <form className={"authentication_form_container"}>
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
                   setValue={setCountry} propsSetValue={""} value={country}/>
            <Input name={"Address"} type={"text"} placeholder={"Adresse"}
                   setValue={setAddress} propsSetValue={""} value={address}/>
            <Input name={"PostalCode"} type={"text"} placeholder={"Code postal"}
                   setValue={setPostalCode} propsSetValue={""} value={postalCode}/>
            <Checkbox name={"privacy"}
                      type={"checkbox"}
                      text={"J’ai lu et j’accepte la Politique de confidentialité"}
                      setValue={setPrivacy}
                      propsSetValue={""} value={privacy}/>
            <NavLink className={"button"} type="submit" onClick={(e:any) => submit(e)} to={"/"}>Inscription</NavLink>
        </form>
    )
}