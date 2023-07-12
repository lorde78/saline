import 'remixicon/fonts/remixicon.css'
import {useState} from "react";
import {preview} from "vite";
import {html} from "mdast-util-to-markdown/lib/handle/html";
import Builder_popup_choose_video from "~/kits/builder_popup_choose_video";
import {hidden} from "kleur/colors";


export default function Builder_select_video() {

    const [videoSelect, setVideoSelect] = useState("")
    const [videoSelectOpen, setVideoSelectOpen] = useState(false)


    const openPopup = () => {
        setVideoSelectOpen(true)
        const body = document.body;
        body.style.overflow = "hidden"

    }
    return (
        <div className={"builder_select_folder"}>
            {videoSelectOpen ? <Builder_popup_choose_video  videoSelect={videoSelectOpen} setVideoSelect={setVideoSelect} setVideoSelectOpen={setVideoSelectOpen}/>: ""}
            <div className={"preview_container"}>
                <iframe src={videoSelect}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen className={"preview"}></iframe>

                <i className={"ri-vidicon-line"}></i>
            </div>
            <button className={"button"} onClick={() => {openPopup()}}>{"Selectionn une video"}</button>
        </div>
    )
}