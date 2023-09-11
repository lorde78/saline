import { AxiosInstance } from "~/axios/axiosInstance";

export default function useRemoveLessonFromTraining() {
    return (lessonsId:any,addToTraining:boolean,trainingId:number) => {

        return AxiosInstance({
            url: `/training?id=${trainingId}&addToTraining=${addToTraining}&lessonsIdList=${lessonsId}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}