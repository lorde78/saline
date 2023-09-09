import {useEffect, useState} from "react";
import User_course_video_nav from "~/components/user_course_video_nav";
import Checkbox from "~/kits/checkbox";

type Props = {
    step: any
}
export default function User_courses_step_video({step}: Props) {
    return (
        <>
            <div className={""}>
                <iframe
                    src={step.data.video}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    className={"backoffice_training_preview_video_iframe"}
                />
            </div>
            <div className={""}>
                <User_course_video_nav
                    id={step.id}
                    informations={step.data.information}
                    professors={step.data.professors}
                    description={step.data.description}
                    comments={step.data.comments}
                />
            </div>
        </>
    )
}