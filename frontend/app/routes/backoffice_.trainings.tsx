import { useEffect, useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import styleRefacto from "~/styles/styleRefacto.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_training from "~/components/backoffice_training";
import { NavLink } from "@remix-run/react";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import {isLogged} from "~/helper/isLogged";

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

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: styleRefacto }
    ];
}

export default function Backoffice_Trainings() {
    useGlobalEffect();
    isLogged("backoffice");

    const [trainings, setTrainings] = useState<Training[]>([]);
    // @ts-ignore
    const getAllTrainings = useGetAllElements<Training>();

    useEffect(() => {
        getAllTrainings("training","").then(r => {
            if (!trainings.length) {
                setTrainings(r);
            }
        });
    }, []);

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Parcours"} logout={true}/>
            <section className={"max_width_container margin-top-20"}>
                <div className={"main_section_container-flex max_width"}>
                    <NavLink to={"new"} className={"button"}>
                        Créer un parcours
                    </NavLink>
                    {(trainings ?? []).length !== 0 ? (
                        trainings.map((training, i) => (
                            <Backoffice_training
                                key={training.id}
                                id={training.id}
                                title={training.title}
                                author={training.author}
                                imgLink={training.bannerPicture}
                                description={training.description}
                                creation_type={"training"}
                            />
                        ))
                    ) : (
                        <p>Aucun parcours n'existe pour le moment.</p>
                    )}
                </div>
            </section>
        </>
    );
}
