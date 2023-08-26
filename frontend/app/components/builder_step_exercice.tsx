import Builder_qcm_step_exercice from "~/components/builder_qcm_step_exercice";
import Builder_bind_list_step_exercice from "~/components/builder_bind_list_step_exercice";

type Props = {
    courseData: any
    setCoursesData: any
    stepSelected: number
    type: string
}
export default function Builder_step_exercice({courseData, setCoursesData, stepSelected, type}: Props) {
    const setData = (value:any) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].data = value
        setCoursesData(newCourseData)
    }
    return (
        <section className={"builder_step_container"}>
            {
                type === "qcm" ?
                    <Builder_qcm_step_exercice qcmData={courseData[stepSelected].data} setQcmData={setData}/> :
                    type === "bind_list" ?
                        <Builder_bind_list_step_exercice
                            bindListData={courseData[stepSelected].data}
                            setBindListData={setData}
                        /> :
                        <></>
            }
        </section>
    )
}