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
import useRemoveStudentsFromClassroom from "~/hook/useRemoveStudentsFromClassroom";
import {NavLink} from "@remix-run/react";


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

    const removeStudents = useRemoveStudentsFromClassroom()

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom",getCurrentId)
        setClassroom(currentClassroom)
        setLoader(true)
    }

    const [bannerHeight, setBannerHeight] = useState(400)

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

    const [studentsAdd, setStudentsAdd] = useState([])

    const checkStudents = (value:boolean, props:any) => {
        let newStudentsAdd = {...studentsAdd}
        if (value) {
            // @ts-ignore
            newStudentsAdd[props.id] = props.id
        } else {
            // @ts-ignore
            delete newStudentsAdd[props.id]
        }
        setStudentsAdd(newStudentsAdd)
    }

    const submitRemove = (e) => {
        if(getCurrentId) {
            removeStudents(studentsAdd,false,getCurrentId)
        }

        window.location.reload()
    }

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
                                <NavLink to={"add"} className={"button"}>
                                    Ajouter des élèves
                                </NavLink>
                                <button className={"button button_alert"} type="submit" onClick={(e) => submitRemove(e)}>
                                    Supprimer les élèves sélectionnés
                                </button>
                            </div>
                            <div className={"backoffice_students_preview_container"}>
                                {
                                    classroom.students.map((student, i) => {
                                        return (
                                            <Checkbox
                                                name={"studentName" + student.id}
                                                type={"checkbox"}
                                                text={student.firstName + " " + student.name}
                                                setValue={checkStudents}
                                                propsSetValue={{id: student.id}}
                                                value={studentsAdd[student.id] ? studentsAdd[student.id].value : false}
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
