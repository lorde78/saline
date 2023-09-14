import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import Header_section_page from "~/kits/header_section_page";
import { NavLink } from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";


export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: styleRefacto }

    ];
}

interface Classroom {
    title: string;
    bannerPicture: string;
    description: string;
}

export default function Backoffice_Classroom_ClassroomId_Edit() {
    useGlobalEffect();
    const getCurrentId = getIdFromUrl(1);
    const [loader, setLoader] = useState(false);

    const [classroom, setClassroom] = useState<Classroom | null>(null);
    const getCurrentClassroom = useGetCurrentElement();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        //@ts-ignore
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

        getClassroom();
    }, []);

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page numberUndoPage={2} title={classroom?.title || ""}  logout={true} edit={true}/>
                    <section className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{ height: bannerHeight }}>
                                <img src={classroom?.bannerPicture || ""} alt={"bannière de la classe"} />
                            </div>
                            <p>{classroom?.description || ""}</p>
                            <div className={"main_section_container-flex"}>
                                <NavLink className={"button"} to={"students"}>
                                    Listes des élèves
                                </NavLink>
                                <NavLink className={"button"} to={"trainings"}>
                                    Consulter les parcours
                                </NavLink>
                                <NavLink className={"button"} to={"assessments"}>
                                    Consulter les évaluations
                                </NavLink>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}