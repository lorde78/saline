import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import {useState} from "react";

type Props = {
    id: number
    informations: any
    professors: any
    description: string
    comments: any
};
export default function User_course_video_nav({
                                                  id,
                                                  informations,
                                                  professors,
                                                  description,
                                                  comments

                                              }: Props) {

    const [active, setActive] = useState("Description")
    const setData = () => {
        switch (active) {
            case "Description":
                return (
                    <div className={"course_video_nav_container"}>
                        <p>{description}</p>
                    </div>
                )
            case "Informations":
                return (
                    <div className={"course_video_nav_container"}>
                        {informations.document !== "" ?
                            <iframe src="informations.document" id={"preview_" + id} className={"preview"}></iframe>
                            :
                            <></>
                        }
                        {informations.infoDescription !== "" ?
                            <p>{informations.infoDescription}</p>
                            :
                            <p>Aucune déscription</p>
                        }
                    </div>
                )
            case
            "Commentaires"
            :
                return (
                    <div className={"course_video_nav_container"}>
                        <h2>Commentaires</h2>
                        <ul>
                            "commentaires"
                        </ul>
                    </div>
                )
            case
            "Professeurs"
            :
                return (
                    <div className={"course_video_nav_container"}>
                        <div>
                            {
                                professors.map((professor, i) => {
                                        return (
                                            <div>
                                                <img src={professor.img}/>
                                                <div>
                                                    <h1>{professor.name}</h1>
                                                    <div>
                                                        <p>Rôle :</p>
                                                        {professor.roles.map((role, i) => {
                                                                return (
                                                                    <p>{role}</p>
                                                                )
                                                            }
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p>Instruments :</p>
                                                        {professor.instruments.map((instrument, i) => {
                                                                return (
                                                                    <p>{instrument}</p>
                                                                )
                                                            }
                                                        )}

                                                    </div>
                                                    <NavLink to={"/professor/" + professor.id} className={"button"}>
                                                        Voir plus
                                                    </NavLink>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                )
        }
    }
    return (
        <>
            <nav>
                <ul>
                    <li onClick={() => {
                        setActive("Description")
                    }}>Description
                    </li>
                    <li onClick={() => {
                        setActive("Informations")
                    }}>Informations
                    </li>
                    <li onClick={() => {
                        setActive("Commentaires")
                    }}>Commentaires
                    </li>
                    <li onClick={() => {
                        setActive("Professeurs")
                    }}>Professeurs
                    </li>
                </ul>
            </nav>
            {setData()}
        </>
    );
}
