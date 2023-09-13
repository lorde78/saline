import {useState} from 'react';
import Input from "~/kits/input";
import Search_filter_popup from "~/components/search_filter_popup";


export default function Header_search() {

    const [search, setSearch] = useState("");
    const [isFilter, setIsFilter] = useState(false);
    return (
        <>
            <div className={"header_search"}>
                <button onClick={() => setIsFilter(true)}>
                    <i className="ri-filter-line"></i>
                </button>
                <Input
                    name={"search"}
                    type={"text"}
                    placeholder={" Rechercher"}
                    setValue={setSearch}
                    propsSetValue={""}
                    value={search}
                />
            </div>
            {isFilter ?
                <Search_filter_popup
                    isFilter={isFilter}
                    setIsFilter={setIsFilter}
                />
                :
                <></>
            }
        </>
    );
}