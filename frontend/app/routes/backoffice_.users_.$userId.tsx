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

    return (
        <>
            <Header_section_page numberUndoPage={1} title={user.firstName + " " + user.lastName} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"main_section_container-flex margin-top-20 max_width"}>
                    <UserInfos src={user.imgLink}/>
                    <Formule subscription="Annuel" />
                    <Accordion title="Vos formations" content="Content 1" picto="ri-book-mark-line" />
                    <Accordion title="Vos commentaires" content="Content 2" picto="ri-message-3-line" />
                    <Accordion title="Vos certifications" content="Content 3" picto="ri-graduation-cap-line" />
                </div>
            </section>
        </>
    );
}