import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import classroom from "~/styles/backofficeClassrooom.css";
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
        { rel: 'stylesheet', href: classroom }
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
                    <div className={"backoffice_classroom_id_container "}>
                        <Header_section_page numberUndoPage={2} title={classroom?.title || ""} />
                        <section className={"max_width_container"}>
                            <div className={"classroom_container-open max_width"}>
                                <div className={"classroom_image_banner"} style={{ height: bannerHeight }}>
                                    <img src={classroom?.bannerPicture || ""} alt={"bannière de la classe"} />
                                </div>
                                <p>{classroom?.description || ""}</p>
                                <div className={"classroom_links"}>
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
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}