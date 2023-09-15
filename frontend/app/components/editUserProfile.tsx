import Input from "~/kits/input";
import Select from "~/kits/select";
import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import HeaderNav from "~/kits/headerNav";
import "~/styles/editProfile.css";
import Loader from "~/kits/loader";
import useUpdateUser from "~/hook/useUpdateUser";
import editLink from "~/helper/editLink";
import {useNavigate} from "react-router-dom";
import Header_section_page from "~/kits/header_section_page";

type UserInfo = {
    id: number;
    firstName: string;
    name: string;
    email: string;
    gender: string;
    birthDate: string;
    country: string;
    postalAddress: string;
};

type Props = {
    userInfo: UserInfo;
};

export default function EditUserProfile({userInfo}: Props) {
    const editPath = editLink(1)
    const navigate = useNavigate()

    const [formData, setFormData] = useState<UserInfo>(userInfo);
    const updateUser = useUpdateUser();

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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

    const changeGender = (value: string, id: number) => {
        setGenderSelected(id)
        setGender(value)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "firstname":
                setFirstName(value);
                break;
            case "lastname":
                setLastName(value);
                break;
            case "BirthDate":
                setBirthDate(value);
                break;
            case "Country":
                setCountry(value);
                break;
            case "Address":
                setAddress(value);
                break;
                break;
            // Ajoutez d'autres cas si vous avez d'autres champs
            default:
                break;
        }
    };

    useEffect(() => {
        setFormData(userInfo);

        setEmail(userInfo.email)
        setFirstName(userInfo.firstName)
        setLastName(userInfo.name)
        setBirthDate(userInfo.birthDate)
        setGender(userInfo.gender)
        setCountry(userInfo.country)
        setAddress(userInfo.postalAddress)
    }, [userInfo]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isoDate = new Date(birthDate).toISOString();
        let newFormData = {
            "email" : email,
            "firstName" : firstName,
            "name" : lastName,
            "genre": gender,
            "nationality": country,
            "birthDate": isoDate,
            "postalAddress": address
        }

        updateUser(newFormData,userInfo.id)

        navigate(editPath)
    };

    return (
        <div>
            <form className="edit-profile_form" onSubmit={handleSubmit}>

                <p className="form_section">Infos personnel</p>

                <Input name={"email"} type={"email"} placeholder={"Mail"}
                       setValue={setEmail} propsSetValue={""} value={email}/>

                <Input name={"firstname"} type={"text"} placeholder={"Prénom"}
                       setValue={setFirstName} propsSetValue={""}
                       value={firstName}/>

                <Input name={"lastname"} type={"text"} placeholder={"Nom"}
                       setValue={setLastName} propsSetValue={""} value={lastName}/>
                <Select
                    optionSelected={genderSelected}
                    setOptionSelected={setGenderSelected}
                    contents={genderData}
                    setValue={changeGender}
                    propsSetValue={""}
                />

                <Input name={"BirthDate"} type={"date"} placeholder={"Date de naissance"}
                       setValue={setBirthDate} propsSetValue={""}
                       value={birthDate}/>
                <Input name={"Country"} type={"text"} placeholder={"Pays"}
                       setValue={setCountry} propsSetValue={""}
                       value={country}/>
                <Input name={"Address"} type={"text"} placeholder={"Adresse"}
                       setValue={setAddress} propsSetValue={""}
                       value={address}/>

                <button className='button' type="submit">Valider</button>
            </form>
        </div>
    );
};
