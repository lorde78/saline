import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_classroom from "~/components/user_classroom";
import User_preview_card from "~/components/user_preview_card";
import useGetAllElements from "~/hook/useGetAllElements";
import {useGlobalEffect} from "~/helper/globalHelper";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {signinContext} from "~/context/signinContext";
import Loader from "~/kits/loader";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Classrooms {
    id: number;
    title: string;
    author: {
        name: string,
        firstName: string
    };
    bannerPicture: string;
    description: string;
}

export default function Classroom() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);
    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);

    const [classrooms, setClassrooms] = useState<Classrooms[]>([]);
    const getAllClassrooms = useGetAllElements();

    useEffect(() => {
        const fetchClassroom = async () => {
            try {
                if (signin) {
                    const currentUserId = await useGetCurrentUserId(signin);
                    setLoader(true)
                    getAllClassrooms("classroom",`?userId=${currentUserId}`).then((r: Classrooms[]) => {
                        if (!classrooms.length) {
                            setClassrooms(r);
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchClassroom()
    }, [signin,classrooms])

    return (
        <>
            {loader ?
                <>
                    <Header/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des classes</h1>
                        <div className={"main_section_container-grid margin-top-20 max_width"}>
                            {classrooms.length !== 0 ? (
                                classrooms.map((classroom, i) => {
                                    return (
                                        <User_preview_card
                                            id={classroom.id}
                                            title={classroom.title}
                                            author={classroom.author}
                                            imgLink={classroom.bannerPicture}
                                            description={classroom.description}
                                        />
                                    );
                                })
                            ) : (
                                <p>Vous n'apparaissez dans aucune classe.</p>
                            )}
                        </div>
                    </main>
                    <Footer/>
                </>
                :
                <Loader/>
            }
        </>
    )
}
