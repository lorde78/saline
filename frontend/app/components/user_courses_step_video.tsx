import User_course_video_nav from "~/components/user_course_video_nav";
import {useEffect, useState} from "react";
import useGetCurrentElement from "~/hook/useGetCurrentElement";

interface Comment {
    id: number;
}

interface Professor {
    id: number;
    img: string;
    name: string;
    roles: string[];
    instruments: string[];
}

interface Information {
    infoDescription: string;
    document: string;
}

interface VideoData {
    description: string;
    infoDescription: string;
    video: any;
    professors: Professor[];
    comments: Comment[];
}

interface Step {
    id: number;
    value: string;
    type: string;
    status?: string;
    data: VideoData;
}

type Props = {
    step: Step;
}

interface Video {
    title: string;
    url: string
}
export default function User_courses_step_video({step}: Props) {
    const [video, setVideo] = useState<Video>({
        title: "",
        url: ""
    });

    // @ts-ignore
    const getCurrentVideo = useGetCurrentElement();

    const getVideo = async () => {
        if (step.data.video.id === "") {
            return;
        }
        const currentVideo = await getCurrentVideo("video", step.data.video.id);
        setVideo(currentVideo);
    };

    useEffect(() => {
        getVideo()
    }, [])

    return (
        <>
            <div className={"courses_preview_video"}>
                <iframe
                    src={video.url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    className={"backoffice_training_preview_video_iframe"}
                />
            </div>
            <div className={"courses_content_container"}>
                <User_course_video_nav
                    id={step.id}
                    informations={step.data.infoDescription}
                    professors={""}
                    description={step.data.description}
                    comments={""}
                />
            </div>
        </>
    )
}