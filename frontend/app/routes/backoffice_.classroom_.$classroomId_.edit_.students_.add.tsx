import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import Header_section_page from "~/kits/header_section_page";
import Checkbox from "~/kits/checkbox";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import getIdFromUrl from "~/helper/getIdFromUrl";
import Loader from "~/kits/loader";
import useRemoveStudentsFromClassroom from "~/hook/useRemoveStudentsFromClassroom";
import { NavLink, useNavigate } from "react-router-dom";
import editLink from "~/helper/editLink";
import useGetAllElements from "~/hook/useGetAllElements";
import useAddStudentsToClassroom from "~/hook/useAddStudentsToClassroom";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: styleRefacto }
    ];
}

export default function Backoffice_Classroom_ClassroomId_Edit_Students_Add() {
    useGlobalEffect("backoffice");

    const addStudents = useAddStudentsToClassroom();
    const navigate = useNavigate();
    const editPath = editLink(4);

    const getCurrentId = getIdFromUrl(3);
    const [loader, setLoader] = useState(false);

    const [classroom, setClassroom] = useState<any>();
    const getCurrentClassroom = useGetCurrentElement();

    const [students, setStudents] = useState<any[]>([]);
    const getAllStudents = useGetAllElements();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        setClassroom(currentClassroom);
        setLoader(true);
    };

    const [bannerHeight, setBannerHeight] = useState(400);

    useEffect(() => {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setBannerHeight(200);
            } else {
                setBannerHeight(400);
            }
        };

        getAllStudents("user","").then(r => {
            if (!students.length) {
                setStudents(r);
            }
        });

        getClassroom();
    }, []);

    const [studentsAdd, setStudentsAdd] = useState<{ [key: string]: any }>({});

    const checkStudents = (value: boolean, props: any) => {
        let newStudentsAdd = { ...studentsAdd };
        if (value) {
            // @ts-ignore
            newStudentsAdd[props.id] = props.id;
        } else {
            // @ts-ignore
            delete newStudentsAdd[props.id];
        }
        setStudentsAdd(newStudentsAdd);
    };

    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addStudents(studentsAdd, true, getCurrentId);

        navigate(editPath + "/" + getCurrentId + "/edit/students");
    };

    return (
        <>
            {loader ?
                <>
                    <Header_section_page numberUndoPage={1} title={classroom.title}  logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{ height: bannerHeight }}>
                                <img src={classroom.bannerPicture} alt={"bannière de la classe"} />
                            </div>
                            <div className={"main_section_container-flex"}>
                                <button className={"button"} onClick={(e) => submit(e)}>Ajouter les élèves</button>
                            </div>
                            <div className={"main_section_container-flex"}>
                                {
                                    students.filter(student => {
                                        //@ts-ignore
                                        return !student.attendingClassrooms.some(classroom => classroom.id === getCurrentId);
                                    }).map((student, i) => {
                                        return (
                                            <Checkbox
                                                key={student.id}
                                                name={"studentName" + student.id}
                                                type={"checkbox"}
                                                text={student.firstName + " " + student.name}
                                                setValue={checkStudents}
                                                propsSetValue={{ id: student.id }}
                                                value={studentsAdd[student.id] ? studentsAdd[student.id].value : false}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className={"classroom_links"}>
                                <button className={"button"} onClick={(e) => submit(e)}>Ajouter les élèves</button>
                            </div>
                        </div>
                    </section>
                </>
                :
                <Loader />
            }
        </>
    )
}