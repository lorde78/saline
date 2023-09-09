import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import training from "~/styles/backofficeTraining.css";
import {NavLink} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";
import Header_section_page from "~/kits/header_section_page";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom},
        {rel: 'stylesheet', href: training},
    ]
}

export default function Classroom_ClassroomId() {


    const [classroom, setClassroom] = useState({
        title: "Steampunk",
        professor: "Jean Paul",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
        imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
        trainings: [
            {
                id: 0,
                title: "Steampunk",
                professor: "Jean Paul",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
                imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                status: "Terminé"
            },
            {
                id: 0,
                title: "Steampunk",
                professor: "Jean Paul",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
                imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                status: "En cours"
            },
            {
                id: 0,
                title: "Steampunk",
                professor: "Jean Paul",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
                imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                status: "A faire"
            }
        ]
    })
    const [bannerHeight, setBannerHeight] = useState(400)

    useEffect(() => {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setBannerHeight(200)
            } else {
                setBannerHeight(400)
            }
        };
    }, []);

    return (
        <>
            <Header/>
            <Header_section_page numberUndoPage={1}  title={classroom.title}/>
            <main className={"max_width_container"}>
                <div className={"classroom_container-open max_width"}>
                    <div className={"classroom_image_banner"} style={{height: bannerHeight}}>
                        <img src={classroom.imgLink} alt={"bannière du cour"}/>
                    </div>
                    <p>{classroom.description}</p>
                    <div className={"classroom_links"}>
                        <NavLink className={"button"} to={"students"}>
                            Listes des élèves
                        </NavLink>
                    </div>
                    <div className={"classroom_preview_training"}>
                        {
                            classroom.trainings.map((training, i) => {
                                return (
                                    <User_preview_card
                                        id={training.id}
                                        title={training.title}
                                        professor={training.professor}
                                        imgLink={training.imgLink}
                                        description={training.description}
                                        status={training.status}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}