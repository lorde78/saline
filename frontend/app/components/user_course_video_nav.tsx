import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import React, {useContext, useEffect, useState} from "react";
import Tag from "~/kits/tag";
import "~/styles/comment.css";
import Comment from "~/kits/comment";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {signinContext} from "~/context/signinContext";
import useCreateComment from "~/hook/useCreateComment";

type Props = {
    id: number;
    informations: any;
    professors: any;
    description: string;
    comments: any;
    videoId: number;
};
export default function User_course_video_nav({
                                                  id,
                                                  informations,
                                                  professors,
                                                  description,
                                                  comments,
                                                  videoId
                                              }: Props) {

    const [commentContent, setCommentContent] = useState("");
    const createComment = useCreateComment();

    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext);
    const [currentUserId, setCurrentUserId] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (signin) {
                    const userId = await useGetCurrentUserId(signin);
                    setCurrentUserId(userId)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser();
    }, [signin])

    const handleResponseSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (commentContent.trim() !== "") {
            setCommentContent("");
        }

        let formData = {
            "content": commentContent,
            "userId": currentUserId,
            "videoId": videoId
        }

        comments = createComment(formData);
        window.location.reload();
    };


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
                            <iframe src={informations.url} id={"preview_" + id}
                                    className={"course_preview_folder"}></iframe>
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
                        {(comments ?? []).length !== 0 ? (
                                <>
                                    <div className="comments_container">
                                        {comments.map((comment: any, i: any) => {
                                            let username = comment.user.firstName + " " + comment.user.name
                                            return (<Comment
                                                    key={i}
                                                    username={username}
                                                    content={comment.content}
                                                    userpic={comment.user.profilePicture}
                                                    date={comment.createdAt}
                                                    upvote={comment.upvote}
                                                    downvote={comment.downvote}
                                                    responsesData={comment.responsesData}
                                                    needResponses={true}
                                                />
                                            )
                                        })}
                                    </div>
                                    <form onSubmit={handleResponseSubmit} className="comment_response_form">
                                        <textarea
                                            value={commentContent}
                                            onChange={(e) => setCommentContent(e.target.value)}
                                            placeholder="Ecrivez le premier commentaire..."
                                        />
                                        <button type="submit">Envoyer</button>
                                    </form>
                                </>
                            ) :
                            (
                                <form onSubmit={handleResponseSubmit} className="comment_response_form">
                                <textarea
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    placeholder="Ecrivez le premier commentaire..."
                                />
                                    <button type="submit">Envoyer</button>
                                </form>
                            )
                        }
                    </>
                )

            case
            "Professeurs"
            :
                return (
                    <>
                        {professors ?
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
                                                                        <Tag roles={job.title}/>
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
                                                                        <Tag roles={instrument.title}/>
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavLink to={"/professor/" + professor.id}
                                                         className={"button"}>
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
