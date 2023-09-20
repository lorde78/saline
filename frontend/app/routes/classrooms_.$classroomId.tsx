import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import {NavLink} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";
import Header_section_page from "~/kits/header_section_page";
import {useGlobalEffect} from "~/helper/globalHelper";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import getIdFromUrl from "~/helper/getIdFromUrl";
import Loader from "~/kits/loader";
import Backoffice_training from "~/components/backoffice_training";
import {isLogged} from "~/helper/isLogged";
import useGetProgress from "~/hook/useGetProgress";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Classroom {
    title: string;
    bannerPicture: string;
    description: string;
    trainings: any;
}

interface Training {
    id: number;
    title: string;
    author: {
        name: string;
        firstName: string;
    };
    bannerPicture: string;
    description: string;
    status: string | undefined;
}
export default function Classroom_ClassroomId() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0)

    const [classroom, setClassroom] = useState<Classroom | null>(null);
    const getCurrentClassroom = useGetCurrentElement();

    const [progressTrainings, setProgressTrainings] = useState<any>();
    const getAllProgressTrainings = useGetProgress();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        const allTrainings = await getAllProgressTrainings("progressTraining");
        //@ts-ignore
        setClassroom(currentClassroom);
        setProgressTrainings(allTrainings);
        setLoader(true);
    };

    const [bannerHeight, setBannerHeight] = useState(400)

    useEffect(() => {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setBannerHeight(200)
            } else {
                setBannerHeight(400)
            }
        };

        getClassroom()
    }, []);

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1}  title={classroom?.title || ""}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{height: bannerHeight}}>
                                <img src={classroom?.bannerPicture} alt={"bannière de la classe"}/>
                            </div>
                            <p>{classroom?.description}</p>
                            <div className={"classroom_links"}>
                                <NavLink className={"button"} to={"students"}>
                                    Listes des élèves
                                </NavLink>
                            </div>
                            <div className={"main_section_container-grid"}>
                                {
                                    classroom?.trainings.map((training: Training, i: any) => {
                                        let currentProgress = progressTrainings.filter((progress:any) => progress.trainingId === training.id);
                                        return (
                                            <User_preview_card
                                                id={training.id}
                                                title={training.title}
                                                author={training.author}
                                                imgLink={training.bannerPicture}
                                                description={training.description}
                                                status={currentProgress[0] ? currentProgress[0].status : "A faire"}
                                                redirectTo={`trainings/${training.id}`}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    )
        ;
}