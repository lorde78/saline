import Select from "~/kits/select";
import {useState} from "react";
import Input from "~/kits/input";
import Builder_select_folder from "~/kits/builder_select_folder";
import Textarea from "~/kits/textarea";

type Props = {
    description: string;
    setDescription: any;
    infoDescription: any;
    setInfoDescription: any;
    setFileInfo: any;
    filesData: any;
}

export default function Builder_navigation_step_video({ description, setDescription, infoDescription, setInfoDescription, filesData, setFileInfo }: Props) {
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
                                               buttonMessage={"Sélectionner un fichier"} dbFile={infoDescription.url} setFileInfo={setFileInfo} filesData={filesData} fileType={"documentations"}/>
                        <Textarea name={"Description"}
                                  placeholder={"Description"}
                                  setValue={setInfoDescription}
                                  propsSetValue={""}
                                  value={infoDescription.text}
                        />
                    </div>
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
            </nav>
            <div>
                {displayNav()}
            </div>
        </div>
    )
}