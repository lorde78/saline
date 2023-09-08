import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import {NavLink} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalMiddleware";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Edit() {
    useGlobalEffect()

    const [classroom, setClassroom] = useState({
        title: "Steampunk",
        professor: "Jean Paul",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting... Lorem Ipsum is simply dummy text of the printing and typesetting...",
        imgLink: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg"
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
        <div className={"backoffice_classroom_id_container "}>
            <Header_section_page numberUndoPage={2}  title={classroom.title}/>
            <section className={"max_width_container"}>
                <div className={"classroom_container-open max_width"}>

                    <div className={"classroom_image_banner"} style={{height: bannerHeight}}>
                        <img src={classroom.imgLink} alt={"bannière du cour"}/>
                    </div>
                    <p>{classroom.description}</p>
                    <div className={"classroom_links"}>
                        <NavLink className={"button"} to={"students"}>
                            Listes des élèves
                        </NavLink>
                        <NavLink className={"button"} to={"assessments"}>
                            Consulter les évaluations
                        </NavLink>
                        <NavLink className={"button"} to={"trainings"}>
                            Consulter les parcours
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}