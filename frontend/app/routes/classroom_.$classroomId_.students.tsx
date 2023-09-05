import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import Checkbox from "~/kits/checkbox";
import Header from "~/components/header";
import Footer from "~/components/footer";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Classroom_ClassroomId_Students() {
    const [classroom, setClassroom] = useState({
        title: "Steampunk",
        professor: "Jean Paul",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
        imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
    })
    const [bannerHeight, setBannerHeight] = useState(400)
    const [students, setStudents] = useState([
        {
            first_name: "Jean",
            last_name: "goldbronn"
        },
        {
            first_name: "Jean",
            last_name: "ezfzesfhdsiquhjfikushbf"
        },
        {
            first_name: "Jean",
            last_name: "aul",
        },
        {
            first_name: "Jean",
            last_name: "bob"
        },
        {
            first_name: "Jean",
            last_name: "Batistedddd"
        },
        {
            first_name: "Jean",
            last_name: "Batiste"
        },
        {
            first_name: "Jean",
            last_name: "Batiste"
        },
        {
            first_name: "Jean",
            last_name: "Batiste"
        },
        {
            first_name: "Jean",
            last_name: "Batiste"
        }
    ])

    return (
        <>
            <Header/>
            <Header_section_page numberUndoPage={1}  title={"Liste des élèves"}/>
            <main className={"max_width_container"}>
                <div className={"students_preview_container"}>
                    {
                        students.map((student, i) => {
                            return (
                                <p>{student.first_name + " " + student.last_name}</p>

                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
}
