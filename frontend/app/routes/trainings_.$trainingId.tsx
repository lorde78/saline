import {useContext, useEffect, useState} from "react";
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
import {isLogged} from "~/helper/isLogged";
import useGetProgress from "~/hook/useGetProgress";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {signinContext} from "~/context/signinContext";
import useStartProgress from "~/hook/useStartProgress";
import {useNavigate} from "react-router-dom";
import {useLocation} from "@remix-run/react";


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

interface progressTraining {
    id: number;
    status: string;
    studentId: number;
    trainingId: number;
    student: any;
    training: any;
}

export default function Trainings_TrainingId() {
    useGlobalEffect()
    isLogged("user");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const getCurrentId = getIdFromUrl(0);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("")

    const [training, setTraining] = useState<Training | null>(null);
    const getCurrentTraining = useGetCurrentElement();

    const [progressTraining, setProgressTraining] = useState<any>();
    const getCurrentProgressTraining = useGetProgress();
    const [hasToStart,setHasToStart] = useState(false);
    const startProgress = useStartProgress();

    const getTraining = async () => {
        const currentTraining = await getCurrentTraining("training", getCurrentId);
        const currentProgressTraining = await getCurrentProgressTraining("progressTraining", "trainingId", getCurrentId);
        //@ts-ignore
        setTraining(currentTraining);
        setProgressTraining(currentProgressTraining);
        if (currentProgressTraining.length === 0) {
            setHasToStart(true);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const userId = await useGetCurrentUserId(signin);
                    setCurrentUserId(userId)
                    setLoader(true);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser()
    }, [signin])

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

    const startTraining = (e:any) => {
        e.preventDefault();

        let formData = {
            status: "En cours",
            studentId: currentUserId,
            trainingId: getCurrentId
        }

        startProgress("progressTraining",formData);

        window.location.reload();
    }

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
                            {hasToStart ? (
                                <button className="button" onClick={(e) => {startTraining(e)}}>Démarrer ce Parcours</button>
                            ) : (
                                <></>
                            )}
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
                                                disable={hasToStart}
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