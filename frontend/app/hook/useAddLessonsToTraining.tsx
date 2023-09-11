import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddLessonsToTraining() {
    return (lessonsIdList:any,addToTraining:boolean,trainingId:number) => {
        const keys = Object.keys(lessonsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        return AxiosInstance({
            url: `/training?id=${trainingId}&addToTraining=${addToTraining}&lessonsIdList=${encodeURIComponent(encodedList)}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}