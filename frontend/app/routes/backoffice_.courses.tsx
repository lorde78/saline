import React, { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import Backoffice_edit_training from "~/components/backoffice_edit_training";
import { NavLink, useLoaderData } from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import Notif from "~/kits/notif";
import {LoaderFunction} from "@remix-run/node";

interface Course {
    id: number;
    title: string;
    description: string;
    numberSteps: number;
    steps: JSON;
    difficultyLevel: string;
    nbViews: number;
    nbCompleted: number;
    userId: number;
    bannerPicture: string;
    author: {
        name: string,
        firstName: string
    }
}

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: styleRefacto }
    ];
}

interface LoaderData {
    isPosted: string | null;
}

export let loader: LoaderFunction = ({ request }) => {
    let url = new URL(request.url);
    let isPosted = url.searchParams.get('isPosted');
    return { isPosted };
}

export default function Backoffice_Courses() {
    useGlobalEffect();
    const loaderData = useLoaderData() as LoaderData;

    const [courses, setCourses] = useState<Course[]>([]);
    const getAllCourses = useGetAllElements();

    useEffect(() => {
        getAllCourses("lesson","").then(r => {
            if (!courses.length) {
                setCourses(r);
            }
        });
    }, []);

    return (
        <>
            <Header_section_page title={"Cours"} numberUndoPage={2} logout={true} />
            {/*<Header_section_page numberUndoPage={1} title={"Cours"} />*/}
            <section className={"max_width_container margin-top-20"}>
                <div className={"main_section_container-flex max_width"}>
                    {loaderData.isPosted ? (
                        <Notif text={"Le cours est mis à jour !"} type={"success"} />
                    ) : (
                        <></>
                    )}
                    <div className={"button_header"}>
                        <NavLink to={"new"} className={"button"}>
                            Créer un cours
                        </NavLink>
                    </div>
                    {(courses ?? []).length !== 0 ? (
                        courses.map((course, i) => {
                            return (
                                <Backoffice_edit_training
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    author={course.author}
                                    imgLink={course.bannerPicture}
                                    description={course.description}
                                    showButton={true}
                                    creation_type={"lesson"}
                                />
                            );
                        })
                    ) : (
                        <p>Aucun cours n'existe pour le moment.</p>
                    )}
                </div>
            </section>
        </>
    );
}