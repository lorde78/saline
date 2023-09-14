import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";
import Header_section_page from "~/kits/header_section_page";
import {useGlobalEffect} from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Training {
    id: number;
    title: string;
    bannerPicture: string;
    description: string;
    author: {
        name: string;
        firstName: string;
    };
    lessons: any;
}

interface Course {
    id: number;
    title: string;
    bannerPicture: string;
    description: string;
    author: {
        name: string,
        firstName: string
    }
}

export default function Trainings_TrainingId() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0)

    const [training, setTraining] = useState<Training | null>(null);
    const getCurrentTraining = useGetCurrentElement();

    const getTraining = async () => {
        const currentClassroom = await getCurrentTraining("training", getCurrentId);
        //@ts-ignore
        setTraining(currentClassroom);
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

        getTraining()
    }, []);

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1} title={training?.title || ""}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{height: bannerHeight}}>
                                <img src={training?.bannerPicture} alt={"bannière du cour"}/>
                            </div>
                            <p>{training?.description}</p>
                            <div className={"main_section_container-grid"}>
                                {
                                    training?.lessons.map((course: Course, i: any) => {
                                        return (
                                            <User_preview_card
                                                id={course.id}
                                                title={course.title}
                                                author={course.author}
                                                imgLink={course.bannerPicture}
                                                description={course.description}
                                                status={"A faire"}
                                                redirectTo={`courses/${course.id}`}
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