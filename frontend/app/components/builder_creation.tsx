import Select from "~/kits/select";
import {MouseEvent, useContext, useEffect, useState} from "react";
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
import useUploadFile from "~/hook/useUploadFile";
import Select_multiple from "~/kits/select_multiple";
import useGetAllElements from "~/hook/useGetAllElements";
import Loader from "~/kits/loader";
import useUpdateBuilderElement from "~/hook/useUpdateBuilderElement";

type Props = {
    creation_type: string,
    relId?: number,
    relType?: string,
    elementData?: any,
    hookType?: string;
}


interface TagData {
    value: string;
    option: string;
}

export default function Builder_creation({creation_type, relId, relType, elementData, hookType}: Props) {
    const editPath = editLink(1);
    const [loader, setLoader] = useState(false);

    const [id, setId] = useState(10);
    const [banner, setBanner] = useState();
    const [defaultBanner, setDefaultBanner] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const getTags = useGetAllElements();

    const getTagsDB = async () => {
        const currentTagsDB = await getTags("tag", "");
        const tagList = currentTagsDB.map((tag:any) => ({
            value: tag.title,
            option: tag.title
        }))

        setTagsData(tagList)
        setLoader(true);
    }

    useEffect(() => {
        getTagsDB();
    }, []);

    useEffect(() => {
        if (elementData) {
            switch (creation_type) {
                case 'lesson':
                    setTitle(elementData.title);
                    setDescription(""); // reset la description
                    setDescription(elementData.description);
                    setDefaultBanner(elementData.bannerPicture);
                    setDifficultySelected(elementData.difficultyLevel - 1);
                    const tagList = elementData.tags.map((tag:any) => {
                        return tag.id - 1;
                    })
                    setTagsSelected(tagList);
                    break;

                case 'training':
                case 'classroom':
                    setTitle(elementData.title);
                    setDescription(""); // reset la description
                    setDescription(elementData.description);
                    setDefaultBanner(elementData.bannerPicture);
                    break;

            }
        }
    }, [elementData]);

    // Difficulty Select
    const [difficulty, setDifficulty] = useState(1);
    const [difficultyData, setDifficultyData] = useState([
        {value: "1", option: "1"},
        {value: "2", option: "2"},
        {value: "3", option: "3"},
        {value: "4", option: "4"},
        {value: "5", option: "5"}
    ]);
    const [difficultySelected, setDifficultySelected] = useState(0);
    // Difficulty Select

    // tag Select
    const [tags, setTags] = useState<string[]>([]);
    const [tagsData, setTagsData] = useState<TagData[]>([]);
    const [tagsSelected, setTagsSelected] = useState<number[]>([]);

    const changeTags = (value: string, id: number) => {
        if (tagsSelected.includes(id)) {
            setTagsSelected(tagsSelected.filter(optionId => optionId !== id));
            setTags(tags.filter(tag => tag !== value));
        } else {
            setTagsSelected([...tagsSelected, id]);
            setTags([...tags, value]);
        }
    }

    const location = useLocation()
    const navigate = useNavigate()

    // @ts-ignore
    const [signin, setSignin] = useContext(signinContext)

    const getcurrentUserId = () => {
        try {
            if (signin) {
                return useGetCurrentUserId(signin)
            }
        } catch (error) {
            console.error(error)
        }
    }

    let creationHook:any = null;

    switch(hookType) {
        case "update":
            creationHook = useUpdateBuilderElement();
            break;

        default:
            creationHook = useCreateBuilderElement();
            break;
    }
    const uploadHook = useUploadFile();
    let createdId: any = null;
    let bannerUrl: any = null;

    const submit = async (e: any) => {
        e.preventDefault()
        const currentUserId = getcurrentUserId()
        const fileUpload = new FormData();
        const tagsList = tagsSelected.map((tag:any) => tag+1);

        if (typeof banner === "string") {
            bannerUrl = banner;
        } else {
            // @ts-ignore
            fileUpload.append("fileToUpload", banner);
            try {
                bannerUrl = await uploadHook(fileUpload, "image")
            } catch (err) {
                console.log("Erreur lors de l'envoi du fichier :", err);
            }
        }

        let formData: any = {
            "title": title,
            "bannerPicture": bannerUrl,
            "description": description,
            "tags": tagsList
        };

        if (!hookType) {
            formData = {
                ...formData,
                "userId": currentUserId
            }
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
            case 'classroom':
                formData = {
                    ...formData,
                    "relType": relType,
                    "relId": relId
                }

                break;
        }

        try {
            createdId = await creationHook(formData, creation_type, elementData.id).then((res: any) => res.id)
        } catch (err) {
            //
        }

        if (hookType === "update") {
            navigate(editPath + "/edit")
        } else {
            navigate(editPath + "/" + createdId + "/edit")
        }
    }

    const complementaryForm = () => {
        switch (creation_type) {
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
                            <h3>Sélectionner un tag</h3>
                            <Select_multiple
                                optionsSelected={tagsSelected}
                                setOptionsSelected={setTagsSelected}
                                contents={tagsData}
                                setValue={changeTags}
                            />
                        </div>
                    </div>
                )
            default :
                return (
                    <></>
                )
        }
    }


    return (
        <>
            {loader ? (
                <form className={"builder_creation"} onSubmit={submit}>
                    <Select_image setValue={setBanner} defaultUrl={defaultBanner}/>
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
                    <button type="submit" className={"button"}>{hookType === "update" ? "Mettre à jour" : "Créer"}</button>
                </form>
            ) : (
                <Loader/>
            )}
        </>
    )
}