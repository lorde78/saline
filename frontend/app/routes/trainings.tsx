import {useContext, useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";
import {useGlobalEffect} from "~/helper/globalHelper";
import {signinContext} from "~/context/signinContext";
import useGetAllElements from "~/hook/useGetAllElements";
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
        name: string,
        firstName: string
    }
}

export default function Trainings() {
    useGlobalEffect()

    const [trainings, setTrainings] = useState<Training[]>([]);
    // @ts-ignore
    const getAllTrainings = useGetAllElements();

    useEffect(() => {
        getAllTrainings("training","").then(r => {
            if (!trainings.length) {
                setTrainings(r);
            }
        })
    }, [])

    return (
        <>
            <Header/>
            <main className={"max_width_container margin-top-20"}>
                <h1>Liste des parcours</h1>
                <div className={"main_section_container-grid margin-top-20 max_width"}>
                    {
                        trainings.map((training, i) => {
                            return (
                                <User_preview_card
                                    id={training.id}
                                    title={training.title}
                                    author={training.author}
                                    imgLink={training.bannerPicture}
                                    description={training.description}
                                    status={"A faire"}
                                    redirectTo={"trainings"}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
}