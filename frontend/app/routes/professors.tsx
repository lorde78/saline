import 'remixicon/fonts/remixicon.css'
import Header from "~/components/header";
import Footer from "~/components/footer";
import Loader from "~/kits/loader";
import {useGlobalEffect} from "~/helper/globalHelper";
import {useEffect, useState} from "react";
import useGetAllElements from "~/hook/useGetAllElements";
import {NavLink} from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import {isLogged} from "~/helper/isLogged";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Role {
    id: number;
    title: string;
}

interface Instrument {
    id: number;
    title: string;
}

interface Formation {
    id: number;
    title: string;
}

interface ProfessorInformation {
    id: number;
    firstName: string;
    lastName: string;
    imageLink: string;
    description: string;
    roles: Role[];
    instruments: Instrument[];
}

interface Professor {
    informations: ProfessorInformation;
    formations: Formation[];
}

export default function Professors() {
    useGlobalEffect();
    isLogged("user");
    const [loader, setLoader] = useState(false);
    const [professors, setProfessors] = useState<Professor[]>([]);
    const [searchTerm, setSearchTerm] = useState("");


    const filteredProfessors = professors.filter(prof =>
        prof.informations.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.informations.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getAllProfessors = useGetAllElements();

    const getProfessors = async () => {
        const allProfessors = await getAllProfessors("professor", "");
        // @ts-ignore
        setProfessors(allProfessors);
        setLoader(true);
    };

    useEffect(() => {
        getProfessors();
    }, [])

    return (
        <>
            {loader ? (
                <>
                    <Header search={true} onSearch={setSearchTerm}/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des professeurs</h1>
                        <div className={"main_section_container-flex-row margin-top-20 max_width"}>
                            {(filteredProfessors ?? []).length !== 0 ?
                                filteredProfessors.map((professor, i) => {  // Change to filteredProfessors here
                                    return (
                                        <NavLink to={professor.informations.id.toString()}
                                                 className={"professor_card_container"}>
                                            <div className={"professors_card"}>
                                                <img src={professor.informations.imageLink}/>
                                            </div>
                                            <div>
                                                <p>{professor.informations.firstName} {professor.informations.lastName}</p>
                                            </div>
                                        </NavLink>
                                    )
                                })
                                :
                                <p>Aucun professeur n'existe pour le moment.</p>
                            }
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