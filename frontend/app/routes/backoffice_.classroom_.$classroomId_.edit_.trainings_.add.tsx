import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import Checkbox from "~/kits/checkbox";
import {useGlobalEffect} from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";
import {useNavigate} from "react-router-dom";
import editLink from "~/helper/editLink";
import useAddTrainingsToClassroom from "~/hook/useAddTrainingsToClassroom";
import styleRefacto from "~/styles/styleRefacto.css";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: styleRefacto}
    ];
}

export default function Backoffice_Classroom_ClassroomId_Edit_Trainings_Add() {
    useGlobalEffect();
    const addTraining = useAddTrainingsToClassroom();
    const navigate = useNavigate();
    const editPath = editLink(4);

    const getCurrentId = getIdFromUrl(3);
    const [loader, setLoader] = useState(false);

    const [classroom, setClassroom] = useState<any>();
    const getCurrentClassroom = useGetCurrentElement();

    const [trainings, setTrainings] = useState<any[]>([]);
    const getAllTrainings = useGetAllElements();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        setClassroom(currentClassroom);
        setLoader(true);
    };

    useEffect(() => {
        getAllTrainings("training", "").then(r => {
            if (!trainings.length) {
                setTrainings(r);
            }
        });

        getClassroom();
    }, []);

    const [trainingsAdd, setTrainingsAddAdd] = useState<any>({});

    const checkTrainings = (value: boolean, props: any) => {
        let newTrainingsAdd = {...trainingsAdd};
        if (value) {
            // @ts-ignore
            newTrainingsAdd[props.id] = props.id;
        } else {
            // @ts-ignore
            delete newTrainingsAdd[props.id];
        }
        setTrainingsAddAdd(newTrainingsAdd);
    };

    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addTraining(trainingsAdd, true, getCurrentId);

        navigate(editPath + "/" + getCurrentId + "/edit/trainings");
    };

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={1} title={classroom.title} logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width margin-top-20"}>
                            <button className={"button"} onClick={(e) => submit(e)}>Ajouter les parcours</button>
                            {
                                trainings.filter(course => {
                                    return !course.classrooms.some((classroom: any) => classroom.id === getCurrentId);
                                }).map((training) => {
                                    let id = training.id;
                                    return (
                                        <div className={"main_section_container-flex-row"} key={classroom.id}>
                                            <Checkbox
                                                name={"checkbox"}
                                                type={"checkbox"}
                                                text={""}
                                                setValue={checkTrainings}
                                                propsSetValue={{id: id}}
                                                // @ts-ignore
                                                value={trainingsAdd[id] ? trainingsAdd[id].value : false}
                                            />
                                            <div className={"width90"}>
                                                <Backoffice_edit_training
                                                    id={training.id}
                                                    title={training.title}
                                                    author={training.author}
                                                    imgLink={training.bannerPicture}
                                                    description={training.description}
                                                    showButton={false}
                                                    creation_type={"training"}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button className={"button"} onClick={(e) => submit(e)}>Ajouter les Parcours</button>
                        </div>
                    </section>
                </>
                :
                <Loader/>
            }
        </>
    )
}