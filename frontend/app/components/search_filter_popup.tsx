import {useState} from 'react';
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";

type Props = {
    setIsFilter: any,
    isFilter: boolean,
}
export default function Search_filter_popup({setIsFilter, isFilter}: Props) {

    const [filters, setFilter] = useState({
        "Instruments": [
            {
                name: "Guitare",
                value: false
            },
            {
                name: "Basse",
                value: false
            },
            {
                name: "Batterie",
                value: false
            },
            {
                name: "Piano",
                value: false
            },
            {
                name: "Chant",
                value: false
            },
            {
                name: "Violon",
                value: false
            },
            {
                name: "Saxophone",
                value: false
            },
            {
                name: "Trompette",
                value: false
            },
        ],
        "Status": [
            {
                name: "En cours",
                value: false
            },
            {
                name: "Terminé",
                value: false
            }
        ]
    });

    const [search, setSearch] = useState("Instruments");

    const changeValue = (value, props) => {
        let newFilters = {...filters};
        newFilters[search][props.index].value = value;
        setFilter(newFilters);
        console.log(newFilters)
        console.log(value)
    }
    const resetFilter = () => {
        let newFilters = {...filters};
        newFilters[search].map((filter, i) => {
            newFilters[search][i].value = false;
        })
        setFilter(newFilters);
    }

    return (
        <>
            <span
                className={"overlay"}
                onClick={() => setIsFilter(false)}
            ></span>
            <div className={"filter_popup_container"}>
                <nav className={"filter_popup_header"}>
                    <div>
                        <button
                            className={search === "Instruments" ? "active" : ""}
                            onClick={() => setSearch("Instruments")}
                        >
                            Instruments
                        </button>
                        <button
                            className={search === "Status" ? "active" : ""}
                            onClick={() => setSearch("Status")}
                        >
                            Status
                        </button>
                    </div>
                    <span onClick={resetFilter}><i className="ri-refresh-line"></i></span>
                </nav>
                <div>
                    {filters[search].map((filter, i) => {
                        return (
                            <label>
                                <Checkbox
                                    name={filter.name}
                                    type={"checkbox"}
                                    text={""}
                                    setValue={changeValue}
                                    propsSetValue={{index: i}}
                                    value={filter.value}
                                />
                                <p>{filter.name}</p>
                            </label>
                        )
                    })}

                </div>
            </div>
        </>
    );
}