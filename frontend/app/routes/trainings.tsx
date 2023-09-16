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
import Loader from "~/kits/loader";
import {isLogged} from "~/helper/isLogged";

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
    isLogged("user");
    const [loader, setLoader] = useState(false);

    const [trainings, setTrainings] = useState<Training[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTrainings = trainings.filter(training =>
        training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // @ts-ignore
    const getAllTrainings = useGetAllElements();

    const getTrainings = async () => {
        const currentTraining = await getAllTrainings("training","");
        setTrainings(currentTraining);
        setLoader(true);
    };

    useEffect(() => {
        getTrainings()
    }, [])

    return (
        <>
            {loader ? (
                <>
                    <Header search={true} onSearch={setSearchTerm}/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des parcours</h1>
                        <div className={"main_section_container-grid margin-top-20 max_width"}>
                            {(filteredTrainings ?? []).length !== 0 ? (
                                filteredTrainings.map((training, i) => {  // Change to filteredTrainings here
                                    return (
                                        <User_preview_card
                                            id={training.id}
                                            title={training.title}
                                            author={training.author}
                                            imgLink={training.bannerPicture}
                                            description={training.description}
                                            status={"A faire"}
                                            redirectTo={`${training.id}`}
                                        />
                                    )
                                })
                            ) : (
                                <p>Aucun parcours n'existe pour le moment.</p>
                            )}
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}
