import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import Checkbox from "~/kits/checkbox";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";
import useAddLessonsToTraining from "~/hook/useAddLessonsToTraining";
import {useNavigate} from "react-router-dom";
import editLink from "~/helper/editLink";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: training}
    ]
}

export default function Backoffice_Trainings_TrainingId_Edit_Add() {
    useGlobalEffect()
    const addLesson = useAddLessonsToTraining()
    const navigate = useNavigate()
    const editPath = editLink(3)

    const getCurrentId = getIdFromUrl(2)
    const [loader,setLoader] = useState(false)

    const [training, setTraining] = useState()
    const getCurrentTraining = useGetCurrentElement()

    const [courses, setCourses] = useState([])
    const getAllCourses = useGetAllElements()

    const getTraining = async () => {
        const currentTraining = await getCurrentTraining("training",getCurrentId)
        setTraining(currentTraining)
        setLoader(true)
    }

    useEffect(() => {
        getAllCourses("lesson").then(r => {
            if (!courses.length) {
                setCourses(r)
            }
        })

        getTraining()
    }, [])

    const [coursesAdd, setCoursesAdd] = useState([])

    const checkCourses = (value:boolean, props:any) => {
        let newCoursesAdd = {...coursesAdd}
        if (value) {
            // @ts-ignore
            newCoursesAdd[props.id] = props.id
        } else {
            // @ts-ignore
            delete newCoursesAdd[props.id]
        }
        setCoursesAdd(newCoursesAdd)
    }

    const submit = (e) => {
        e.preventDefault()
        // addLesson(coursesAdd,true,training.id)

        navigate(editPath + "/" + getCurrentId + "/edit")
    }

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={1}  title={"Ajouter un cours"}/>
                    <section className={"max_width_container"}>
                        <div className={"backoffice_training_preview_container max_width"}>
                            <button className={"button"} onClick={(e) => submit(e)}>Ajouter les cours</button>
                            {
                                courses.filter(course => {
                                    return !course.trainings.some(training => training.id === getCurrentId)
                                }).map((course) => {
                                    let id = course.id
                                    return (
                                        <div className={"course_preview_container"}>
                                            <Checkbox
                                                name={"checkbox"}
                                                type={"checkbox"}
                                                text={id}
                                                setValue={checkCourses}
                                                propsSetValue={{id: id}}
                                                // @ts-ignore
                                                value={coursesAdd[id] ? coursesAdd[id].value : false}
                                            />
                                            <Backoffice_edit_training
                                                id={course.id}
                                                title={course.title}
                                                author={course.author}
                                                imgLink={course.bannerPicture}
                                                description={course.description}
                                                showButton={false}
                                            />
                                        </div>
                                    )
                                })
                            }
                            <button className={"button"} onClick={(e) => submit(e)}>Ajouter les cours</button>
                        </div>
                    </section>
                </>
                :
                <Loader/>
            }
        </>
    )
}
