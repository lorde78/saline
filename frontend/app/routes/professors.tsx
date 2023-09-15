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

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

interface Professor {
    id: number;
    firstname: string;
    lastname: string;
    profilePicture: string;
    description: string;
    jobs: any;
    instruments: any;
    awards: any;
}

export default function Professors() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);

    const [professors, setProfessors] = useState<Professor>();
    // @ts-ignore
    const getAllProfessors = useGetAllElements();

    const getProfessors = async () => {
        const allProfessors = await getAllProfessors("professor", "");
        setProfessors(allProfessors);
        setLoader(true);
    };

    useEffect(() => {
        getProfessors()
    }, [])

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des professeurs</h1>
                        <div className={"main_section_container-flex-row margin-top-20 max_width"}>
                            {// @ts-ignore
                                professors.map((professor: Professor, i: number) => {
                                return (
                                    <NavLink to={professor.id.toString()} className={"professor_card_container"}>
                                        <div  className={"professors_card"}>
                                            <img src={professor.profilePicture}/>
                                        </div>
                                        <div>
                                            <p>{professor.firstname} {professor.lastname}</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    )
}

