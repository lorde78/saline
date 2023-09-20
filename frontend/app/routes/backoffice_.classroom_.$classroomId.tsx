import React, {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
import Header_section_page from "~/kits/header_section_page";
import Builder_creation from "~/components/builder_creation";
import { useGlobalEffect } from "~/helper/globalHelper";
import { Outlet, useLocation } from "@remix-run/react";
import {isLogged} from "~/helper/isLogged";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: classroom }
    ];
}

interface Classroom {
    title: string;
    bannerPicture: string;
    description: string;
}

export default function Backoffice_Classroom_New() {
    useGlobalEffect("backoffice");
    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0);

    const [classroom, setClassroom] = useState<Classroom | null>(null);
    const getCurrentClassroom = useGetCurrentElement();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        setClassroom(currentClassroom);
        setLoader(true);
    }

    useEffect(() => {
        getClassroom();
    }, []);

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Créer une classe"} logout={true} />
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    <Builder_creation creation_type={"classroom"} elementData={classroom} hookType={"update"}/>
                </div>
            </section>
        </>
    );
}