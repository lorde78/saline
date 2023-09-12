import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import Checkbox from "~/kits/checkbox";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import getIdFromUrl from "~/helper/getIdFromUrl";
import Loader from "~/kits/loader";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: classroom}
    ]
}

export default function Backoffice_Classroom_ClassroomId_Edit_Students() {
    useGlobalEffect()
    const getCurrentId = getIdFromUrl(2)
    const [loader,setLoader] = useState(false)

    const [classroom, setClassroom] = useState()
    const getCurrentClassroom = useGetCurrentElement()

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom",getCurrentId)
        setClassroom(currentClassroom)
        setLoader(true)
    }

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
            selected: false
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

        getClassroom()
    }, []);

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={1} title={classroom.title}/>
                    <section className={"max_width_container"}>
                        <div className={"classroom_container-open max_width"}>
                            <div className={"classroom_image_banner"} style={{height: bannerHeight}}>
                                <img src={classroom.bannerPicture} alt={"bannière de la classe"}/>
                            </div>
                            <div className={"classroom_links"}>
                                <button className={"button"}>
                                    Ajouter un élève
                                </button>
                                <button className={"button button_alert"}>
                                    Supprimer les élèves séléctionnés
                                </button>
                            </div>
                            <div className={"backoffice_students_preview_container"}>
                                {
                                    classroom.students.map((student, i) => {
                                        return (
                                            <Checkbox
                                                name={"studenName" + i}
                                                type={"checbox"}
                                                text={student.firstName + " " + student.name}
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
                :
                <Loader/>
            }
        </>
    )
}
