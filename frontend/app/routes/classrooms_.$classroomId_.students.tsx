import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header_section_page from "~/kits/header_section_page";
import Header from "~/components/header";
import Footer from "~/components/footer";
import {useGlobalEffect} from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
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

interface Classroom {
    title: string;
    bannerPicture: string;
    description: string;
    students: any;
}

interface Student {
    name: string;
    firstName: string;
}
export default function Classroom_ClassroomId_Students() {
    useGlobalEffect("user");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(1)

    const [classroom, setClassroom] = useState<Classroom | null>(null);
    const getCurrentClassroom = useGetCurrentElement();

    const getClassroom = async () => {
        const currentClassroom = await getCurrentClassroom("classroom", getCurrentId);
        //@ts-ignore
        setClassroom(currentClassroom);
        setLoader(true);
    };

    useEffect(() => {
        getClassroom()
    }, []);

    return (
        <>
            {loader ? (
                <>
                    <Header/>
                    <Header_section_page numberUndoPage={1} title={"Liste des élèves"}/>
                    <main className={"max_width_container"}>
                        <div className={"main_section_container-flex margin-top-20"}>
                            {
                                classroom?.students.map((student: Student, i: any) => {
                                    return (
                                        <p>{student.firstName + " " + student.name}</p>

                                    )
                                })
                            }
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
