import 'remixicon/fonts/remixicon.css'
import Switch_button from "~/kits/switch_button";
import {useState} from "react";
import Input from "~/kits/input";
import Color_picker from "~/kits/color_picker";
import Select from "~/kits/select";
import Checkbox from "~/kits/checkbox";

type Props = {
    id: number,
    name: string,
    target: string,
    rates_price: string
    rates_time: string
    musts: any
    setValue: any
};
export default function Backoffice_edit_formula({
                                                    id,
                                                    name,
                                                    target,
                                                    rates_price,
                                                    rates_time,
                                                    musts,
                                                    setValue
                                                }: Props) {

    const [editing, setEditing] = useState(false)

    return (
        <div className={"formula_edit_container"}>
            {editing ?
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
                        defaultContent={target}
                        contents={[{value: "User", option: "utilisateur"}, {value: "Professor", option: "professeur"}]}
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
                            defaultContent={rates_time}
                            contents={[{value: "month", option: "mois"}, {value: "annual", option: "an"}]}
                            setValue={setValue}
                            propsSetValue={{id: id, valuToChange: "rates_time"}}
                        />
                    </div>
                    <h1>Droits</h1>
                    {
                        musts.map((must, i) => {
                            return (
                                <div>
                                    <Checkbox
                                        name={i}
                                        type={"checkbox"}
                                        text={must.name}
                                        setValue={setValue}
                                        propsSetValue={{id: id, valuToChange: "musts", mustID: i}}
                                        value={must.active}/>
                                </div>
                            )
                        })
                    }

                    <button className={"button"} onClick={() => {
                        setEditing(false)
                    }}>Valider
                    </button>
                </>
                :
                <div className={"formula"}>
                    <div className={"formule_sub"}>{name}</div>
                    <div>{rates_price}/{rates_time}</div>
                    <div>
                        <button onClick={() => {
                            setEditing(true)
                        }}>
                            <i className="ri-pencil-line"></i>
                        </button>
                        <button onClick={() => {
                            console.log("supprimer")
                        }}>
                            <i className="ri-delete-bin-7-line"></i>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
