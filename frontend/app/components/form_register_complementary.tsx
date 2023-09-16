import Input from "~/kits/input";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import Select_image from "~/kits/select_image";
import { useState, useContext } from "react";
import { registerContext } from "~/context/registerContext";
import useRegister from "~/hook/useRegister";
import { NavLink } from "@remix-run/react";
import {useNavigate} from "react-router-dom";
import useUploadFile from "~/hook/useUploadFile";

export default function Form_register_complementary() {
    // @ts-ignore
    const [registerData,setRegister] = useContext(registerContext)
    const navigate = useNavigate()

    const [profilePicture, setProfilePicture] = useState()
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

    const uploadHook = useUploadFile()
    const register = useRegister()
    let pictureUrl: any = null;

    const submit = async (e:any) => {
        e.preventDefault();
        const fileUpload = new FormData();

        // @ts-ignore
        fileUpload.append("fileToUpload", profilePicture);

        try {
            pictureUrl = await uploadHook(fileUpload, "image")
        } catch (err) {
            console.log("Erreur lors de l'envoi du fichier :", err);
        }

        const isoDate = new Date(birthDate).toISOString();
        let formData = {
            ...registerData,
            "profilePicture": pictureUrl,
            "genre": gender,
            "nationality": country,
            "birthDate": isoDate,
            "postalAddress":  address + ", " + postalCode
        }

        register(formData)

        navigate("/")
    }

    return (
        <form className={"authentication_form_container"} onSubmit={submit}>
            {/* @ts-ignore */}
            <Select_image setValue={setProfilePicture}/>
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
            <button className={"button"} type="submit" >Inscription</button>
        </form>
    )
}