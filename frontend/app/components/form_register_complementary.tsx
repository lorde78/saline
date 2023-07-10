import Input from "~/kits/input";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import Select_image from "~/kits/select_image";

export default function Form_register_complementary() {
    return (
        <form action="" method="post">
            <h1>Inscription</h1>
            <Select_image />
            <Select id={"Gender"} name={"Gender"} contents={[{value:"Men", option:"Homme"},{value:"Woman", option:"Femme"}, {value:"Other", option:"Autre"}]} />
            <Input name={"BirthDate"} type={"date"} placeholder={"Date de naissance"} />
            <Input name={"Country"} type={"text"} placeholder={"Pays"} />
            <Input name={"Address"} type={"text"} placeholder={"Adresse"} />
            <Input name={"PostalCode"} type={"text"} placeholder={"Code postal"} />
            <Checkbox text={"J’ai lu et j’accepte la Politique de confidentialité"} />
            <button className={"button"} type="submit">Inscription</button>
        </form>
    )
}