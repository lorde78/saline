import {useEffect, useState} from 'react';
import Input from "~/kits/input";
import Search_filter_popup from "~/components/search_filter_popup";
import useGetAllElements from "~/hook/useGetAllElements";

type Props = {
    onSearch: (searchTerm: string) => void,
    setActiveFilters: any
}

interface TagData {
    value: string;
    option: string;
}
export default function Header_search({onSearch, setActiveFilters}: Props) {

    const [search, setSearch] = useState("");
    const [isFilter, setIsFilter] = useState(false);

    const [tagsData, setTagsData] = useState<TagData[]>([]);
    const getTags = useGetAllElements();

    const getTagsDB = async () => {
        const currentTagsDB = await getTags("tag", "");
        const tagList = currentTagsDB.map((tag:any) => ({
            value: tag.title,
            option: tag.title
        }));

        setTagsData(tagList);
    }

    useEffect(() => {
        getTagsDB();
    }, []);

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
                    setActiveFilters={setActiveFilters}
                    tagsData={tagsData}
                />
                :
                <></>
            }
        </>
    );
}