import 'remixicon/fonts/remixicon.css'
import React, {useEffect, useState} from "react";
import {preview} from "vite";
import {html} from "mdast-util-to-markdown/lib/handle/html";
import useGetAllElements from "~/hook/useGetAllElements";


interface Props {
    setVideoSelect: any
    setVideoSelectOpen: any
}

interface Video {
    id: number;
    title: string;
    url: string;
}

export default function Builder_popup_choose_video({setVideoSelect, setVideoSelectOpen}: Props) {
    const [loader, setLoader] = useState(false);

    const [videos, setVideos] = useState<Video>();
    // @ts-ignore
    const getAllVideos = useGetAllElements();

    const getVideos = async () => {
        const allVideos = await getAllVideos("video", "");
        setVideos(allVideos);
        setLoader(true);
    };

    useEffect(() => {
        getVideos()
    }, [])

    const chooseVideo = async (video:Video) => {
        await setVideoSelect(video)
        setVideoSelectOpen(false)
        const body = document.body;
        body.style.overflow = "scroll";
    }

    const closePopup = () => {
        setVideoSelectOpen(false)
        const body = document.body;
        body.style.overflow = "scroll"
    }

    return (
        <>
            {loader ? (
                <div className={"builder_popup_select_video"}>
                    <div id={"popup"}>
                        < i onClick={closePopup} className="ri-close-line"></i>
                        {//@ts-ignore
                            videos?.map((video: Video, i: number) => {
                            return (
                                <div>
                                    <iframe src={video.url}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen ></iframe>
                                    <button onClick={() => chooseVideo(video)} className={"button"}>
                                        Sélectionner
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}