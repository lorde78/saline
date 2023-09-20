import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import {useState} from "react";
import Tag from "~/kits/tag";

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
    console.log("prof :",professors);
    const [active, setActive] = useState("Description")
    const setData = () => {
        switch (active) {
            case "Description":
                return (
                    <>
                        <p>{description}</p>
                    </>
                )
            case "Informations":
                return (
                    <div className={"grid_content"}>
                        {informations.url ?
                            <iframe src={informations.url} id={"preview_" + id} className={"course_preview_folder"}></iframe>
                            :
                            <></>
                        }
                        {informations ?
                            <p>{informations.text}</p>
                            :
                            <p>Aucune description</p>
                        }
                    </div>
                )
            case
            "Commentaires"
            :
                return (
                    <>
                        <ul>
                            "commentaires"
                        </ul>
                    </>
                )
            case
            "Professeurs"
            :
                return (
                    <>
                        {professors?
                            professors.map((professor: any, id: number) => {
                                    return (
                                        <div className={"preview_courses_profesor"}>
                                            <div className={"professors_card"}>
                                                <img src={professor.profilePicture}/>
                                            </div>
                                            <div className={""}>
                                                <h1>{professor.firstname} {professor.lastname}</h1>
                                                <div>
                                                    <div>
                                                        <p>Rôle :</p>
                                                        <div>
                                                            {professor.jobs.map((job: any, id: number) => {
                                                                    return (
                                                                        <Tag roles={job.title} />
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Instruments :</p>
                                                        <div>
                                                            {professor.instruments.map((instrument: any, id: number) => {
                                                                    return (
                                                                        <Tag roles={instrument.title} />
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavLink to={"/professor/" + professor.id} className={"button"}>
                                                    Voir plus
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                            :
                            <p>Aucun professeurs</p>
                        }
                    </>
                )
        }
    }
    return (
        <>
            <nav>
                <ul>
                    <li className={active === "Description" ? "active" : ""} onClick={() => {
                        setActive("Description")
                    }}>Description
                    </li>
                    <li className={active === "Informations" ? "active" : ""} onClick={() => {
                        setActive("Informations")
                    }}>Informations
                    </li>
                    <li className={active === "Commentaires" ? "active" : ""} onClick={() => {
                        setActive("Commentaires")
                    }}>Commentaires
                    </li>
                    <li className={active === "Professeurs" ? "active" : ""} onClick={() => {
                        setActive("Professeurs")
                    }}>Professeurs
                    </li>
                </ul>
            </nav>
            <div className={"course_video_nav_content"}>
                {setData()}
            </div>
        </>
    );
}
