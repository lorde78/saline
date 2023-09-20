import {useEffect, useState} from 'react';
import Input from "~/kits/input";
import Checkbox from "~/kits/checkbox";

type Props = {
    setIsFilter: any,
    isFilter: boolean,
    setActiveFilters: any,
    tagsData: any,
}
export default function Search_filter_popup({setIsFilter, isFilter,setActiveFilters, tagsData}: Props) {

    const setFiltersList = tagsData.map((tag:any) => {
        return { name: tag.value, value: false }
    })

    const [filters, setFilter] = useState({
        "Instruments": setFiltersList
    });

    const [search, setSearch] = useState("Instruments");


    const changeValue = (value:any, props:any) => {
        let newFilters = { ...filters };
        // @ts-ignore
        newFilters[search][props.index].value = value;
        setFilter(newFilters);

        // @ts-ignore
        let updatedFilters = newFilters[search].filter(item => item.value).map(item => item.name);
        if (search === "Instruments") {
            setActiveFilters((prev:any) => ({ ...prev, instruments: updatedFilters }));
        }
    }
    const resetFilter = () => {
        let newFilters = {...filters}
        // @ts-ignore
        newFilters[search].map((filter, i) => {
            // @ts-ignore
            newFilters[search][i].value = false
        });
        setFilter(newFilters);
        if (search === "Instruments") {
            setActiveFilters((prev:any) => ({ ...prev, instruments: [] }))
        }
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
                    </div>
                    <span onClick={resetFilter}><i className="ri-refresh-line"></i></span>
                </nav>
                <div>
                    {//@ts-ignore
                        filters[search].map((filter, i) => {
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