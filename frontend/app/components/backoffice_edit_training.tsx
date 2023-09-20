import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import {useNavigate} from "react-router-dom";
import useRemoveLessonFromTraining from "~/hook/useRemoveLessonFromTraining";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useDeleteElement from "~/hook/useDeleteElement";
import useRemoveTrainingFromClassroom from "~/hook/useRemoveTrainingFromClassroom";

type Props = {
    id: number,
    title: string,
    author: {
        firstName: string,
        name: string,
    },
    description: string,
    imgLink: string,
    showButton: boolean,
    creation_type: string,
    tags?: any,
};
export default function Backoffice_edit_training({
                                                     id,
                                                     title,
                                                     author,
                                                     description,
                                                     imgLink,
                                                     showButton,
                                                     creation_type,
                                                     tags
                                                 }: Props) {

    const deleteElement = useDeleteElement()
    const removeLesson = useRemoveLessonFromTraining()
    const getCurrentId = getIdFromUrl(1)

    const submit = (e: any) => {
        if (!getCurrentId) {
            deleteElement(creation_type, id)
        } else {
            removeLesson(id, false, getCurrentId)
        }

        window.location.reload()
    }

    return (
        <div className={"preview_card preview_card-row"}>
            <div className={"banner_image"}>
                <img src={imgLink} alt={"bannière du cours"}/>
            </div>
            <div className={"preview_card_content"}>
                <div className={"content_header"}>
                    <p>{title}</p>
                    <p>{author.firstName} {author.name}</p>
                </div>
                <p className={"training_description margin-top-20"}>
                    {description}
                </p>
                <div className={"header_tags"}>
                    {(tags ?? []).length != 0 ? (
                        <>
                            <p>Tags:</p>
                            {tags.map((tag: any) => {
                                return <p>{tag.title}</p>
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                {showButton ?
                    <div className={"preview_card_button margin-top-20"}>
                        <NavLink className={"button"} to={`/backoffice/courses/${id}/edit`}>
                            Modifier
                        </NavLink>
                        <button className={"button button_alert"} type="submit" onClick={(e) => submit(e)}>Supprimer
                        </button>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}
