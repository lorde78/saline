import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import Backoffice_classroom from "~/components/backoffice_classroom";
import Header_section_page from "~/kits/header_section_page";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_classroom from "~/components/user_classroom";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
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
            <main className={"max_width_container"}>
                <div className={"backoffice_classroom_preview_container max_width"}>
                    {
                        classrooms.map((classroom, i) => {
                            return (
                                <User_classroom
                                    id={i}
                                    title={classroom.title}
                                    professor={classroom.professor}
                                    imgLink={classroom.imgLink}
                                    description={classroom.description}
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
