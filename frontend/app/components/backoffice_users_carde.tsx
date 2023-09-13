import 'remixicon/fonts/remixicon.css'
import {NavLink} from "@remix-run/react";
import FormuleTag from "~/kits/formuleTag";
type Props = {
    id: number,
    imgLink: string,
    name: string,
    formula: string,
    createdAt: string,
};

export default function Backoffice_users_carde({
                                             id,
                                             imgLink,
                                             name,
                                             formula,
                                             createdAt
                                         }: Props) {

    return (
        <NavLink to={id.toString()} className={"preview_card-row-flex"}>
            <div className={"pp_card_small"}>
                <img src={imgLink}/>
            </div>
            <div className={"preview_card-row-flex"}>
                <div className={""}>
                    <h4>{name}</h4>
                    <p>Crée le {createdAt}</p>
                </div>
                <FormuleTag subscription={formula}/>
            </div>
        </NavLink>
    );
}
