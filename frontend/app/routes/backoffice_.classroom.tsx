import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import { NavLink, Outlet, useLocation } from "@remix-run/react";
import Backoffice_classroom from "~/components/backoffice_classroom";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: styleRefacto }
    ];
}

interface Classroom {
    id: number;
    title: string;
    author: {
        name: string,
        firstName: string
    };
    bannerPicture: string;
    description: string;
}

export default function Backoffice_Classroom() {
    useGlobalEffect();

    const [classrooms, setClassrooms] = useState<Classroom[]>([]);
    const getAllClassrooms = useGetAllElements();

    useEffect(() => {
        getAllClassrooms("classroom","").then((r: Classroom[]) => {
            if (!classrooms.length) {
                setClassrooms(r);
            }
        });
    }, []);

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Classes"} logout={true}/>
            <section className={"max_width_container margin-top-20"}>
                <div className={"main_section_container-flex max_width"}>
                    <NavLink to={"new"} className={"button"}>
                        Créer une classe
                    </NavLink>
                    {(classrooms ?? []).length !== 0 ? (
                        classrooms.map((classroom: Classroom, i) => {
                            return (
                                <Backoffice_classroom
                                    key={i}
                                    id={classroom.id}
                                    title={classroom.title}
                                    author={classroom.author}
                                    imgLink={classroom.bannerPicture}
                                    description={classroom.description}
                                    creation_type={"classroom"}
                                />
                            );
                        })
                    ) : (
                        <p>Aucune classe n'existe pour le moment.</p>
                    )}
                </div>
            </section>
        </>
    );
}