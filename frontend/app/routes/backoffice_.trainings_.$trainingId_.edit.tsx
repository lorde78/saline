import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import {NavLink, useLocation} from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import getIdFromUrl from "~/helper/getIdFromUrl";
import Loader from "~/kits/loader";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Trainings_TrainingId_Edit() {
    useGlobalEffect()
    const getCurrentId = getIdFromUrl()
    const [loader,setLoader] = useState(false)

    const [training, setTraining] = useState()
    const [courses, setCourses] = useState([])

    const getCourses = useGetAllElements()
    const getCurrentTraining = useGetCurrentElement()

    const getTraining = async () => {
        const currentTraining = await getCurrentTraining("training",getCurrentId)
        setTraining(currentTraining)
        setLoader(true)
    }

    useEffect(() => {
        getCourses("lesson").then(r => {
            if (!courses.length) {
                setCourses(r)
            }
        })

        getTraining()
    }, [])

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={2}  title={training.title}/>
                    <section className={"max_width_container"}>
                        <div className={"backoffice_training_preview_container max_width"}>
                            <div className={"button_header"}>
                                <NavLink to={"new"} className={"button"}>
                                    Créer un cours
                                </NavLink>
                                <NavLink className={"button"} to={'add'}>
                                    Ajouter un cours
                                </NavLink>
                            </div>
                            {
                                courses.map((course, i) => {
                                    return (
                                        <Backoffice_edit_training
                                            id={course.id}
                                            title={course.title}
                                            author={course.author}
                                            imgLink={course.bannerPicture}
                                            description={course.description}
                                            showButton={true}
                                        />
                                    )
                                })
                            }
                        </div>
                    </section>
                </>
                :
                <Loader/>
            }
        </>
    )
}
