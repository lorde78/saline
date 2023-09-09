import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

export default function Courses() {


    const [courses, setCourses] = useState([
            {
                id: 0,
                title: "course 1",
                professor: "Jean Paul",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
                imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                status: "Terminé"
            },
            {
                id: 1,
                title: "course 2",
                professor: "Jean Paul",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
                imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                status: "Non commencé"
            },
        ]
    )

    return (
        <>
            <Header/>
            <main className={"max_width_container margin-top-20"}>
                <h1>Liste des cours</h1>
                <div className={"main_section_container-grid margin-top-20 max_width"}>
                    {
                        courses.map((course, i) => {
                            return (
                                <User_preview_card
                                    id={course.id}
                                    title={course.title}
                                    professor={course.professor}
                                    imgLink={course.imgLink}
                                    description={course.description}
                                    status={course.status}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}