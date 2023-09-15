import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import formula from "~/styles/formule.css";
import Header_section_page from "~/kits/header_section_page";
import {useState} from "react";
import UserInfos from "~/kits/userInfos";
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import {Slider} from "~/components/slider";
import Select from "~/kits/select";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formula},
        {rel: 'stylesheet', href: styleRefacto},
    ];
}


export default function Backoffice_Users_UserId() {

    const [user, setUser] = useState({
            id: 1,
            firstName: "Jean",
            lastName: "Paul",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            formula: "Annuel",
            createdAt: "12/12/2020"
        })

    const [role, setRole] = useState("")
    const [roleData, setRoleData] = useState([
        {value: "User", option: "User"},
        {value: "Responsable pédagogique", option: "Responsable pédagogique"},
        {value: "Professeur", option: "Professeur"},
        {value: "Marketing", option: "Marketing"},
        {value: "Admin", option: "Admin"},
    ])
    const [roleSelected, setRoleSelected] = useState(0)

    return (
        <>
            <Header_section_page numberUndoPage={1} title={user.firstName + " " + user.lastName} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"main_section_container-flex margin-top-20 max_width"}>
                    <div className={"pp_card_small"}>
                        <img src={user.imgLink}/>
                    </div>
                    <h2>Role :</h2>
                    <Select
                        optionSelected={roleSelected}
                        setOptionSelected={setRoleSelected}
                        contents={roleData}
                        setValue={setRole}
                        propsSetValue={""}
                    />
                    <button className={"button"}>Valider</button>
                </div>
            </section>
        </>
    );
}