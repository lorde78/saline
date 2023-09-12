import 'remixicon/fonts/remixicon.css'
import React, {useState} from "react";
import {preview} from "vite";
import {html} from "mdast-util-to-markdown/lib/handle/html";


interface Props {
    videoSelect: any
    setVideoSelect: any
    setVideoSelectOpen: any
}

export default function Builder_popup_choose_video({videoSelect, setVideoSelect, setVideoSelectOpen}: Props) {
    const [videosList, setVideosList] = useState(
        {
            "videos": [
                {
                    "link": "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    "link": "https://www.youtube.com/embed/Zi_XLOBDo_Y"
                },
                {
                    "link": "https://www.youtube.com/embed/Zi_XLOBDo_Y"
                },
                {
                    "link": "https://www.youtube.com/embed/Zi_XLOBDo_Y"
                },
                {
                    "link": "https://www.youtube.com/embed/Zi_XLOBDo_Y"
                },
                {
                    "link": "https://www.youtube.com/embed/Zi_XLOBDo_Y"
                },
                {
                    "link": "https://www.youtube.com/embed/Ss6vLmLcCbU"
                }
            ]
        }
    )

    const chooseVideo = (video:string) => {
        setVideoSelect(video)
        setVideoSelectOpen(false)
        const body = document.body;
        body.style.overflow = "scroll"
    }

    const closePopup = () => {
        setVideoSelectOpen(false)
        const body = document.body;
        body.style.overflow = "scroll"
    }

    return (
        <div className={"builder_popup_select_video"}>
            <div id={"popup"}>
                < i onClick={closePopup} className="ri-close-line"></i>
                {videosList.videos.map((video) => {
                    return (
                        <div>
                            <iframe src={video.link}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen ></iframe>
                            <button onClick={() => chooseVideo(video.link)} className={"button"}>
                                Selectioner
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}