import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddTrainingsToClassroom() {
    return (trainingsIdList:any,addToClassroom:boolean,classroomId:number) => {
        const keys = Object.keys(trainingsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        return AxiosInstance({
            url: `/classroom?id=${classroomId}&addTraining=${addToClassroom}&trainingsIdList=${encodeURIComponent(encodedList)}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}