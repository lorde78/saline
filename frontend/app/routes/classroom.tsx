import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_classroom from "~/components/user_classroom";
import User_preview_card from "~/components/user_preview_card";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

export default function Classroom() {

    const [classrooms, setClassrooms] = useState([
        {
            title: "Steampunk",
            professor: "Jean Paul",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
            imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
        }
    ])
    return (
        <>
            <Header/>
            <main className={"max_width_container margin-top-20"}>
                <h1>Liste des classes</h1>
                <div className={"main_section_container-grid margin-top-20 max_width"}>
                    {
                        classrooms.map((classroom, i) => {
                            return (
                                <User_preview_card
                                    id={i}
                                    title={classroom.title}
                                    professor={classroom.professor}
                                    imgLink={classroom.imgLink}
                                    description={classroom.description}
                                    status={classroom.professor}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
}
