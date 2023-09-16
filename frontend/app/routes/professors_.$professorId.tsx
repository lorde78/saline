import 'remixicon/fonts/remixicon.css'
import Header from "~/components/header";
import Footer from "~/components/footer";
import Loader from "~/kits/loader";
import {useGlobalEffect} from "~/helper/globalHelper";
import {useEffect, useState} from "react";
import {NavLink} from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import ProfessorInfos from "~/kits/professorInfos";
import Accordion from "~/kits/accordion";
import Header_section_page from "~/kits/header_section_page";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import {isLogged} from "~/helper/isLogged";

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
    video: any;
    lessons: any;
}
export default function Professors() {
    useGlobalEffect()
    isLogged("user");
    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0)

    const [professor, setProfessor] = useState<Professor>();
    // @ts-ignore
    const getCurrentProfessors = useGetCurrentElement();

    const getProfessors = async () => {
        const currentProfessor = await getCurrentProfessors("professor", getCurrentId);
        setProfessor(currentProfessor);
        setLoader(true);
    };

    useEffect(() => {
        getProfessors()
    }, [])

    return (
        <>
            {loader ? (
                <>
                    <Header />
                    <Header_section_page numberUndoPage={1} title={professor?.firstname + " " + professor?.firstname}/>
                    <main className={"max_width_container margin-top-20"}>
                        <div className={"main_section_container-flex margin-top-20 max_width"}>
                            <ProfessorInfos  awards={professor?.awards} instruments={professor?.instruments} jobs={professor?.jobs} profilePicture={professor?.profilePicture || ""}/>
                            <Accordion title="Ce professeur apparaît dans :" picto="ri-book-mark-line" type={"lessons"} data={professor?.video}/>
                            <p className="professor-biographie">{professor?.description}</p>
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

