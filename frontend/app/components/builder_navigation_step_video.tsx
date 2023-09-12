import Select from "~/kits/select";
import {useState} from "react";
import Input from "~/kits/input";
import Builder_select_folder from "~/kits/builder_select_folder";
import Textarea from "~/kits/textarea";

type Props = {
    description: string
    setDescription: any
    infoDescription: string
    setInfoDescription: any
}

export default function Builder_navigation_step_video({ description, setDescription, infoDescription, setInfoDescription }: Props) {
    const [stepsNav, setStepsNav] = useState("Description")

    const displayNav = () => {
        switch (stepsNav) {
            case "Description":
                return (
                    <Textarea name={"Description"}
                              placeholder={"Description"}
                              setValue={setDescription}
                              propsSetValue={""}
                              value={description}
                    />
                )
            case "Information":
                return (
                    <div className={"nav_information"}>
                        <Builder_select_folder icon={"ri-file-2-line"} folderType={"application/pdf"} idType={"pdf"}
                                               buttonMessage={"Sélectionner un fichier"}/>
                        <Textarea name={"Description"}
                                  placeholder={"Description"}
                                  setValue={setInfoDescription}
                                  propsSetValue={""}
                                  value={infoDescription}
                        />
                    </div>
                )
            case "Parcours":
                return (
                    "Parcours"
                )
            case "Professeurs":
                return (
                    "Professeurs"
                )
            default:
                return
        }
    }

    return (
        <div className={"builder_navigation_step_video_container"}>
            <nav>
                <button onClick={() => setStepsNav("Description")}>Description</button>
                <button onClick={() => setStepsNav("Information")}>Information</button>
                <button onClick={() => setStepsNav("Parcours")}>Parcours</button>
                <button onClick={() => setStepsNav("Professeurs")}>Professeurs</button>
            </nav>
            <div>
                {displayNav()}
            </div>
        </div>
    )
}