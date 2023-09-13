import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";
import useDeleteElement from "~/hook/useDeleteElement";
import useRemoveLessonFromTraining from "~/hook/useRemoveLessonFromTraining";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useRemoveTrainingFromClassroom from "~/hook/useRemoveTrainingFromClassroom";

type Props = {
    id: number,
    title: string,
    author: {
        firstName: string,
        name: string
    },
    description: string,
    imgLink: string,
    creation_type: string
};
export default function Backoffice_training({
                                                 id,
                                                 title,
                                                 author,
                                                 description,
                                                 imgLink,
                                                 creation_type
                                             }: Props) {
    const deleteTraining = useDeleteElement()
    const removeTraining = useRemoveTrainingFromClassroom()
    const getCurrentId = getIdFromUrl(2)

    const submit = (e:any) => {
        if(!getCurrentId) {
            deleteTraining(creation_type,id)
        } else {
            removeTraining(id,false,getCurrentId)
        }

        window.location.reload()
    }

    return (
        <div className={"backoffice_training_container"}>
            <div className={"training_image"}>
                <img src={imgLink} alt={"bannière du parcours"}/>
            </div>
            <div className={"training_info"}>
                <div className={"training_header_info"}>
                    <p>{title}</p>
                    <p>{author.firstName} {author.name}</p>
                </div>
                <p className={"training_description"}>
                    {description}
                </p>
                <div className={"training_button"}>
                    <NavLink className={"button"} to={`/backoffice/trainings/${id.toString()}/edit`}>
                        Modifier
                    </NavLink>
                    <button className={"button button_alert"} type="submit" onClick={(e) => submit(e)}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
