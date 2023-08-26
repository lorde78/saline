import Builder_select_video from "~/kits/builder_select_video";
import Builder_navigation_step_video from "~/components/builder_navigation_step_video";

type Props = {
    courseData: any
    setCoursesData: any
    stepSelected: number
}
export default function Builder_step_video({courseData, setCoursesData, stepSelected}: Props) {
    const selectVideo = (value:string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.video = value
        setCoursesData(newCourseData)
    }
    const setDescription = (value:string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.description = value
        setCoursesData(newCourseData)
    }

    const setInfoDescription = (value:string) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data.infoDescription = value
        setCoursesData(newCourseData)
    }

    return (
        <section className={"builder_step_container"}>
            <Builder_select_video
                setVideoSelect={selectVideo}
                videoSelect={courseData[stepSelected].data.video}
            />
            <Builder_navigation_step_video
                description={courseData[stepSelected].data.description}
                setDescription={setDescription}
                infoDescription={courseData[stepSelected].data.infoDescription}
                setInfoDescription={setInfoDescription}

            />
        </section>
    )
}