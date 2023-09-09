import User_course_video_nav from "~/components/user_course_video_nav";

type Props = {
    step: any
}
export default function User_courses_step_video({step}: Props) {
    return (
        <>
            <div className={"courses_preview_video"}>
                <iframe
                    src={step.data.video}
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
                    informations={step.data.information}
                    professors={step.data.professors}
                    description={step.data.description}
                    comments={step.data.comments}
                />
            </div>
        </>
    )
}