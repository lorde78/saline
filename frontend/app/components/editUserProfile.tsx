import Input from "~/kits/input";
import Select from "~/kits/select";
import { useState, ChangeEvent, FormEvent } from 'react';
import HeaderNav from "~/kits/headerNav";
import "~/styles/editProfile.css";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  country: string;
  address: string;
  postalCode: number;
};

type Props = {
  userInfo: UserInfo;
};

export default function EditUserProfile ({ userInfo }: Props) {
    const [formData, setFormData] = useState<UserInfo>(userInfo);

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
    const [postalCode, setPostalCode] = useState("")

    const changeGender = (value: string, id: number) => {
        setGenderSelected(id)
        setGender(value)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
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
          case "PostalCode":
            setPostalCode(value);
            break;
          // Ajoutez d'autres cas si vous avez d'autres champs
          default:
            break;
        }
      };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique pour envoyer les données modifiées au serveur
    console.log(formData);
    };

  return (
    <div>
      <HeaderNav namePage="Modifier mon profil"/>
      <form className="edit-profile_form" onSubmit={handleSubmit}>
        
        <p className="form_section">Infos personnel</p>
 
        <Input name={"email"} type={"email"} placeholder={"Mail"}
                   setValue={setEmail} propsSetValue={formData.email} value={email || formData.email}/>

        <Input name={"firstname"} type={"text"} placeholder={"Prénom"}
                setValue={setFirstName} propsSetValue={formData.firstName} value={firstName || formData.firstName}/>

        <Input name={"lastname"} type={"text"} placeholder={"Nom"}
                setValue={setLastName} propsSetValue={formData.lastName} value={lastName || formData.lastName}/>
        <Select
            optionSelected={genderSelected}
            setOptionSelected={setGenderSelected}
            contents={genderData}
            setValue={changeGender}
            propsSetValue={""}
            

        />
        
        <Input name={"BirthDate"} type={"date"} placeholder={"Date de naissance"}
                   setValue={setBirthDate} propsSetValue={formData.birthDate} value={birthDate || formData.birthDate}/>
        <Input name={"Country"} type={"text"} placeholder={"Pays"}
                setValue={setCountry} propsSetValue={formData.country} value={country || formData.country}/>
        <Input name={"Address"} type={"text"} placeholder={"Adresse"}
                setValue={setAddress} propsSetValue={formData.address} value={address || formData.address}/>
        <Input name={"PostalCode"} type={"text"} placeholder={"Code postal"}
                setValue={setPostalCode} propsSetValue={formData.postalCode} value={postalCode || formData.postalCode}/>
        
        <button className='button' type="submit">Valider</button>
      </form>
    </div>
  );
};
