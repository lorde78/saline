import Select from "~/kits/select";
import {useState} from "react";
import Select_image from "~/kits/select_image";
import Header_section_page from "~/kits/header_section_page";
import Input from "~/kits/input";
import Textarea from "~/kits/textarea";
import {NavLink, useLocation} from "@remix-run/react";


export default function Builder_creation() {
    const [id, setId] = useState(10)
    const [banner, setBanner] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return (
        <form className={"builder_creation"}>
            <Select_image/>
            <Input
                name={"title"}
                type={'text'}
                placeholder={"Titre"}
                setValue={setTitle}
                propsSetValue={""}
                value={title}
            />
            <Textarea
                name={"Description"}
                placeholder={"Décription"}
                setValue={setDescription}
                propsSetValue={""}
                value={description}
            />
            <NavLink onClick={() => console.log("click")} className={"button"} to={useLocation().pathname + "/edit"}>Ajouter une étape</NavLink>
        </form>
    )
}