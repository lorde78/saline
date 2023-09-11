import Select from "~/kits/select";
import {useContext, useEffect, useState} from "react";
import Select_image from "~/kits/select_image";
import Header_section_page from "~/kits/header_section_page";
import Input from "~/kits/input";
import Textarea from "~/kits/textarea";
import {useLoaderData, useLocation, useSearchParams} from "@remix-run/react";
import useCreateClassroom from "~/hook/useCreateBuilderElement";
import {signinContext} from "~/context/signinContext";
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate, useParams} from "react-router-dom";
import useCreateBuilderElement from "~/hook/useCreateBuilderElement";
import editLink from "~/helper/editLink";
import {LoaderFunction} from "@remix-run/node";

type Props = {
    creation_type: string,
    relId: number,
    relType: string
}

export default function Builder_creation({creation_type,relId,relType}: Props) {
    const editPath = editLink(1)

    const [id, setId] = useState(10)
    const [banner, setBanner] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // Difficulty Select
    const [difficulty, setDifficulty] = useState(1)
    const [difficultyData, setDifficultyData] = useState([
        {value: "1", option: "1"},
        {value: "2", option: "2"},
        {value: "3", option: "3"},
        {value: "4", option: "4"},
        {value: "5", option: "5"}
    ])
    const [difficultySelected, setDifficultySelected] = useState(0)
    // Difficulty Select

    const location = useLocation()
    const navigate = useNavigate()

    const [signin, setSignin] = useContext(signinContext)

    const getcurrentUserId = () => {
        try {
            if (signin) {
                return  useGetCurrentUserId(signin)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const creationHook = useCreateBuilderElement()
    let createdId = null;

    const submit = async (e) => {
        e.preventDefault()
        const currentUserId = getcurrentUserId()
        let formData:any = {
            "title": title,
            "userId": currentUserId,
            "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
            "description": description
        }

        switch (creation_type) {
            case 'training':
                formData = {
                    ...formData,
                    "difficultyLevel": difficulty
                }
                break;

            case 'lesson':
                formData = {
                    ...formData,
                    "difficultyLevel": difficulty
                }
                break;
        }

        switch (relType) {
            case 'training':
                formData = {
                    ...formData,
                    "relType": relType,
                    "relId": relId
                }
        }

        createdId = await creationHook(formData,creation_type).then(res => res.id)

        navigate(editPath + "/" + createdId + "/edit")
    }

    const complementaryForm = () => {
        switch(creation_type) {
            case 'training':
            case 'lesson':
                return (
                    <div>
                        <div>
                            <h3>Niveau de difficulté</h3>
                            <Select
                                optionSelected={difficultySelected}
                                setOptionSelected={setDifficultySelected}
                                contents={difficultyData}
                                setValue={setDifficulty}
                                propsSetValue={""}
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                )
        }
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
            {complementaryForm()}
            <button onClick={(e) => submit(e)} className={"button"}>Ajouter une étape</button>
        </form>
    )
}