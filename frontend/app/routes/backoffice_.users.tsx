import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import formula from "~/styles/formule.css";
import Header_section_page from "~/kits/header_section_page";
import {useState} from "react";
import Backoffice_users_carde from "~/components/backoffice_users_carde"

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formula},
        {rel: 'stylesheet', href: styleRefacto},
    ];
}


export default function Backoffice_Users() {

    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "Jean",
            lastName: "Paul",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            formula: "Annuel",
            createdAt: "12/12/2020"
        },
        {
            id: 2,
            firstName: "Jean",
            lastName: "Paul",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            formula: "Annuel",
            createdAt: "12/12/2020"
        },
        {
            id: 3,
            firstName: "Jean",
            lastName: "Paul",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            formula: "Annuel",
            createdAt: "12/12/2020"
        }
    ])

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Liste des utilisateurs"}/>
            <section className={"max_width_container"}>
                <div className={"main_section_container-flex margin-top-20 max_width"}>
                    {users.map((user, i) => {
                            return (
                                <Backoffice_users_carde
                                    id={user.id}
                                    name={user.firstName + " " + user.lastName}
                                    imgLink={user.imgLink}
                                    formula={user.formula}
                                    createdAt={user.createdAt}
                                />
                            )
                        }
                    )}
                </div>
            </section>
        </>
    );
}