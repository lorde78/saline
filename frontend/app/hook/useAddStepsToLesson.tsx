import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddStepsToLesson() {
    return (stepsData:any,updateSteps:boolean,lessonId:number) => {

        return AxiosInstance({
            url: `/lesson?id=${lessonId}&updateSteps=${updateSteps}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                steps: stepsData
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}