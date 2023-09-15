import {useEffect, useState} from 'react';
import Input from "~/kits/input";
import Search_filter_popup from "~/components/search_filter_popup";

type Props = {
    onSearch: (searchTerm: string) => void
}
export default function Header_search({onSearch}: Props) {

    const [search, setSearch] = useState("");
    const [isFilter, setIsFilter] = useState(false);

    useEffect(() => {
        onSearch(search);
    }, [search]);

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