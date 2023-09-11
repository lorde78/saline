import 'remixicon/fonts/remixicon.css'
import {NavLink, Outlet, useLocation} from "@remix-run/react";

type Props = {
    id: number,
    title: string,
    author: {
        firstName: string,
        name: string
    },
    description: string
    imgLink: string
    showButton: boolean
};
export default function Backoffice_edit_training({
                                                     id,
                                                     title,
                                                     author,
                                                     description,
                                                     imgLink,
                                                     showButton
                                                 }: Props) {

    const submit = (e) => {
        
    }

    return (
        <div className={"backoffice_training_container backoffice_training_container-open"}>
            <div className={"training_image"}>
                <img src={imgLink} alt={"bannière du cour"}/>
            </div>
            <div className={"training_info"}>
                <div className={"training_header_info"}>
                    <p>{title}</p>
                    <p>{author.firstName} {author.name}</p>
                </div>
                <p className={"training_description"}>
                    {description}
                </p>
                {showButton ?
                    <div className={"training_button"}>
                        <NavLink className={"button"} to={id + '/edit'}>
                            Modifier
                        </NavLink>
                        <button className={"button button_alert"} type="submit" onClick={(e) => submit(e)}>Supprimer</button>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}
