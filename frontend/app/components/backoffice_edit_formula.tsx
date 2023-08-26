import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";
import {NavLink} from "@remix-run/react";

type Props = {
    id: number,
    name: string,
    rates_price: string
    musts: any
    setValue: any
};
export default function Backoffice_edit_formula({
                                                    id,
                                                    name,
                                                    rates_price,
                                                    musts,
                                                    setValue,
                                                }: Props) {
    const [targets, setTargets] = useState([
        {value: "utilisateur", option: "User"},
        {value: "professeur", option: "Professor"}
    ])
    const [targetsSelected, setTargetsSelected] = useState(0)
    const [ratesTime, setRatesTime] = useState([
        {value: "mois", option: "month"},
        {value: "an", option: "annual"}
    ])
    const [ratesTimeSelected, setRatesTimeSelected] = useState(0)

    return (
        <div className={"formula_edit_container"}>
            <>
                <h1>Infos</h1>
                <Input
                    name={"name" + id}
                    type={"text"}
                    placeholder={"Nom"}
                    setValue={setValue}
                    propsSetValue={{id: id, valuToChange: "name"}}
                    value={name}
                />
                <Select
                    optionSelected={targetsSelected}
                    setOptionSelected={setTargetsSelected}
                    contents={targets}
                    setValue={setValue}
                    propsSetValue={{id: id, valuToChange: "target"}}
                />
                <div className={"price_content"}>
                    <Input
                        name={"rates_price" + id}
                        type={"number"}
                        placeholder={"Tarifs"}
                        setValue={setValue}
                        propsSetValue={{id: id, valuToChange: "rates_price"}}
                        value={rates_price}
                    />
                    <Select
                        optionSelected={ratesTimeSelected}
                        setOptionSelected={setRatesTimeSelected}
                        contents={ratesTime}
                        setValue={setValue}
                        propsSetValue={{id: id, valuToChange: "rates_time"}}
                    />
                </div>
                <h1>Droits</h1>
                {
                    musts.map((must: any, i: number) => {
                        return (
                            <div>
                                <Checkbox
                                    name={"mustActive" + i}
                                    type={"checkbox"}
                                    text={must.name}
                                    setValue={setValue}
                                    propsSetValue={{id: id, valuToChange: "musts", mustID: i}}
                                    value={must.active}/>
                            </div>
                        )
                    })
                }

                <NavLink className={"button"} onClick={() => console.log('click')} to={"/backoffice/formulas"}>
                    Valider
                </NavLink>
            </>
        </div>
    );
}
