import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import {NavLink, useLocation} from "@remix-run/react";

type Props = {
    id: number,
    name: string,
    rates_price: string
    rates_time: string
    deleteFormula: any
};
export default function Backoffice_formulas({
                                                id,
                                                name,
                                                rates_price,
                                                rates_time,
                                                deleteFormula
                                            }: Props) {

    return (
        <div className={"formula_edit_container"}>
            <div className={"formula"}>
                <div className={"formule_sub"}>{name}</div>
                <div>{rates_price}/{rates_time}</div>
                <div>
                    <NavLink to={useLocation().pathname + '/' + id}>
                        <i className="ri-pencil-line"></i>
                    </NavLink>
                    <button onClick={() => {
                        deleteFormula(id)
                    }}>
                        <i className="ri-delete-bin-7-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
