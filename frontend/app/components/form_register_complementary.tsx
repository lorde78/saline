import Input from "~/kits/input";
import Select from "~/kits/select";

export default function Form_register_complementary() {
    return (
        <form action="" method="post">
            <h1>Inscription</h1>
            <Select id={"Gender"} name={"Gender"} contents={[{value:"Men", option:"Homme"},{value:"Woman", option:"Femme"}, {value:"Other", option:"Autre"}]} />
            <Input name={"BirthDate"} type={"date"} placeholder={"Date de naissance"} />
            <Input name={"Country"} type={"text"} placeholder={"Pays"} />
            <Input name={"Address"} type={"text"} placeholder={"Adresse"} />
            <Input name={"PostalCode"} type={"text"} placeholder={"Code postal"} />
            <label className={"checkbox"}>
                <input type="checkbox" name="remember"/>
                <span className={"check"}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z"
                        fill="#0F0F0F"/>
                    </svg>
                </span>
                J’ai lue et j’accèpte la Politique de confientialité
            </label>
            <button className={"button"} type="submit">Inscription</button>
        </form>
    )
}