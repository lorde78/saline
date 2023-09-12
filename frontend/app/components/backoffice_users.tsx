import 'remixicon/fonts/remixicon.css'
import {NavLink} from "react-router-dom";

type Props = {
    id: number,
    imgLink: string,
    name: string,
    formula: string,
    createdAt: string,
};

export default function Backoffice_users({
                                             id,
                                             imgLink,
                                             name,
                                             formula,
                                             createdAt
                                         }: Props) {


    return (
        <NavLink to={id} className={"preview_card-row"}>
            <div className={"pp_card_small"}>
                <img href={imgLink}/>
                <div>
                    <h4>{name}</h4>
                    <p>Crée le {createdAt}</p>
                </div>
                {formula}
            </div>
        </NavLink>
    );
}
