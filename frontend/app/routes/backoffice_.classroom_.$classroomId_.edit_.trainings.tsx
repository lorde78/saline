import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import { NavLink } from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import getIdFromUrl from "~/helper/getIdFromUrl";
import Loader from "~/kits/loader";
import useGetCurrentElement from "~/hook/useGetCurrentElement";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: training }
    ];
}

export default function Backoffice_Classroom_ClassroomId_Edit_Trainings() {
    useGlobalEffect();
    const getCurrentId = getIdFromUrl(2);
    const [loader, setLoader] = useState(false);

    const [classroom, setClassroom] = useState<any>();
    const getCurrentClassroom = useGetCurrentElement();

    const [trainings, setTrainings] = useState<any[]>([]);
    const getTrainings = useGetAllElements();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        setClassroom(currentClassroom);
        setLoader(true);
    };

    useEffect(() => {
        getTrainings("training","").then(r => {
            if (!trainings.length) {
                setTrainings(r);
            }
        });

        getClassroom();
    }, []);

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={1} title={classroom.title}  logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"backoffice_training_preview_container max_width"}>
                            <div className={"button_header"}>
                                <NavLink to={`/backoffice/trainings/new?relId=${getCurrentId}&relType=classroom`} className={"button"}>
                                    Créer un parcours
                                </NavLink>
                                <NavLink className={"button"} to={'add'}>
                                    Ajouter un parcours
                                </NavLink>
                            </div>
                            {
                                trainings.filter(training => {
                                    return training.classrooms.some((classroom: any) => classroom.id === getCurrentId);
                                }).map((training, i) => {
                                    return (
                                        <Backoffice_training
                                            key={i}
                                            id={training.id}
                                            title={training.title}
                                            author={training.author}
                                            imgLink={training.bannerPicture}
                                            description={training.description}
                                            creation_type={"classroom"}
                                        />
                                    )
                                })
                            }
                        </div>
                    </section>
                </>
                :
                <Loader />
            }
        </>
    )
}