import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import User_preview_card from "~/components/user_preview_card";
import {useGlobalEffect} from "~/helper/globalHelper";
import useGetAllElements from "~/hook/useGetAllElements";
import Loader from "~/kits/loader";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
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

export default function Courses() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);

    const [courses, setCourses] = useState<Course[]>([]);
    // @ts-ignore
    const getAllCourses = useGetAllElements();

    const getCourses = async () => {
        const currentCourse = await getAllCourses("lesson","");
        setCourses(currentCourse);
        setLoader(true);
    };

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <>
            {loader ? (
                <>
                    <Header search={true}/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des cours</h1>
                        <div className={"main_section_container-grid margin-top-20 max_width"}>
                            {(courses ?? []).length !== 0 ? (
                                courses.map((course, i) => {
                                    return (
                                        <User_preview_card
                                            id={course.id}
                                            title={course.title}
                                            author={course.author}
                                            imgLink={course.bannerPicture}
                                            description={course.description}
                                            redirectTo={"courses"}
                                        />
                                    )
                                })
                            ) : (
                                <p>Aucun cours n'existe pour le moment.</p>
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