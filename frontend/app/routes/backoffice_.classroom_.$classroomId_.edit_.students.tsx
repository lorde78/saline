import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import Checkbox from "~/kits/checkbox";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Edit_Students() {
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
            last_name: "Batiste"
        },
        {
            first_name: "Jean",
            last_name: "Batiste"
        },
        {
            first_name: "Jean",
            last_name: "Batiste",
            selcted: false
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
            <Header_section_page numberUndoPage={1}  title={"élève"}/>
            <section className={"max_width_container"}>
                <div className={"classroom_container-open max_width"}>
                    <div className={"classroom_image_banner"} style={{height: bannerHeight}}>
                        <img src={classroom.imgLink} alt={"bannière du cour"}/>
                    </div>
                    <div className={"classroom_links"}>
                        <button className={"button"}>
                            Ajouter un élève
                        </button>
                        <button className={"button button_alert"}>
                            Supprimer les élève séléctioné
                        </button>
                    </div>
                    <div className={"backoffice_students_preview_container"}>
                        {
                            students.map((student, i) => {
                                return (
                                    <Checkbox
                                        name={"studenName" + i}
                                        type={"checbox"}
                                        text={student.first_name + " " + student.last_name}
                                        setValue={setStudents}
                                        propsSetValue={""}
                                        value={true}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
