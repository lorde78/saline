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
import useStartProgress from "~/hook/useStartProgress";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";


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

export default function Classrooms_ClassroomId_Trainings_TrainingId() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("");

    const [training, setTraining] = useState<Training | null>(null);
    const getCurrentTraining = useGetCurrentElement();

    const [progressTraining, setProgressTraining] = useState<any>();
    const getCurrentProgressTraining = useGetProgress();
    const [hasToStart,setHasToStart] = useState(false);
    const startProgress = useStartProgress();

    const [progressCourses, setProgressCourses] = useState<any>();
    const getAllProgressCourses = useGetProgress();

    const getTraining = async () => {
        const currentClassroom = await getCurrentTraining("training", getCurrentId);
        const currentProgressTraining = await getCurrentProgressTraining("progressTraining", "trainingId", getCurrentId);
        const allProgress = await getAllProgressCourses("progressLesson");
        //@ts-ignore
        setTraining(currentClassroom);
        setProgressTraining(currentProgressTraining[0]);
        setProgressCourses(allProgress);
        if (currentProgressTraining.length === 0) {
            setHasToStart(true);
        }
        setLoader(true);
    };

    const [bannerHeight, setBannerHeight] = useState(400)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const userId = await useGetCurrentUserId(signin);
                    setCurrentUserId(userId);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser()
    }, [signin])

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
                    <Header_section_page numberUndoPage={2} title={training?.title || ""} status={progressTraining ? progressTraining.status : "A faire"}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex max_width"}>
                            <div className={"big_banner_image"} style={{height: bannerHeight}}>
                                <img src={training?.bannerPicture} alt={"bannière du cour"}/>
                            </div>
                            <p>{training?.description}</p>
                            <div className={"main_section_container-grid"}>
                                {
                                    training?.lessons.map((course: Course, i: any) => {
                                        let currentProgress = progressCourses.filter((progress:any) => progress.lessonId === course.id)
                                        return (
                                            <User_preview_card
                                                id={course.id}
                                                title={course.title}
                                                author={course.author}
                                                imgLink={course.bannerPicture}
                                                description={course.description}
                                                status={currentProgress[0] ? currentProgress[0].status : "A faire"}
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