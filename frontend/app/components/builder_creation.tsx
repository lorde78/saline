import Select from "~/kits/select";
import {useContext, useEffect, useState} from "react";
import Select_image from "~/kits/select_image";
import Header_section_page from "~/kits/header_section_page";
import Input from "~/kits/input";
import Textarea from "~/kits/textarea";
import {useLocation} from "@remix-run/react";
import useCreateClassroom from "~/hook/useCreateClassroom";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate} from "react-router-dom";

type Props = {
    creation_type: string,
    useCreateHook: any
}

export default function Builder_creation({creation_type,useCreateHook}: Props) {
    const [id, setId] = useState(10)
    const [banner, setBanner] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const [signin, setSignin] = useContext(signinContext)
    const currentUserId = useGetCurrentUserId(signin)

    const creationHook = useCreateHook()
    let createdId = null;

    const editLink = () => {
        let path = location.pathname
        let newPath = path.split("/")

        let pathArray = newPath.pop()

        // @ts-ignore
        return newPath.toString().replaceAll(",", "/")
    }

    const submit = async (e) => {
        e.preventDefault()
        let formData = {
            "title": title,
            "userId": currentUserId,
            "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            "description": description
        }

        createdId = await creationHook(formData).then(res => res[creation_type].id)

        navigate(editLink() + "/" + createdId + "/edit")
    }

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
                placeholder={"Description"}
                setValue={setDescription}
                propsSetValue={""}
                value={description}
            />
            <button onClick={(e) => submit(e)} className={"button"}>Ajouter une étape</button>
        </form>
    )
}