import 'remixicon/fonts/remixicon.css'
import {useEffect, useState} from "react";
import {preview} from "vite";
import {html} from "mdast-util-to-markdown/lib/handle/html";
import Builder_popup_choose_video from "~/kits/builder_popup_choose_video";
import {hidden} from "kleur/colors";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";

type Props = {
    courseData: any;
    setCoursesData: any;
    stepSelected: number;
}

interface Video {
    title: string;
    url: string
}

export default function Builder_select_video({courseData, setCoursesData, stepSelected}:Props) {
    const [videoSelectOpen, setVideoSelectOpen] = useState(false)

    const [video, setVideo] = useState<Video>({
        title: "",
        url: ""
    });

    // @ts-ignore
    const getCurrentVideo = useGetCurrentElement();

    const selectVideo = (value:any) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.video.title = value.title
        newCourseData[stepSelected].data.video.id = value.id
        setCoursesData(newCourseData)
    }

    const getVideo = async () => {
        if (courseData[stepSelected].data.video.id === "") {
            return;
        }
        const currentVideo = await getCurrentVideo("video", courseData[stepSelected].data.video.id);
        setVideo(currentVideo);
    };

    useEffect(() => {
        getVideo();
    }, [courseData])

    const openPopup = () => {
        setVideoSelectOpen(true)
        const body = document.body;
        body.style.overflow = "hidden"
    }

    return (
        <div className={"builder_select_folder"}>
            {videoSelectOpen ? <Builder_popup_choose_video  setVideoSelect={selectVideo} setVideoSelectOpen={setVideoSelectOpen}/>: ""}
            <div className={"preview_container"}>
                <iframe src={video.url}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen className={"preview"}>

                </iframe>

                <i className={"ri-vidicon-line"}></i>
            </div>
            <button className={"button"} onClick={() => {openPopup()}}>{"Sélectionner une vidéo"}</button>
        </div>
    )
}