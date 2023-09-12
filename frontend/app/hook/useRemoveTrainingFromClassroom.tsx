import { AxiosInstance } from "~/axios/axiosInstance";

export default function useRemoveTrainingFromClassroom() {
    return (trainingId:any,addTraining:boolean,classroomId:number) => {

        return AxiosInstance({
            url: `/classroom?id=${classroomId}&addTraining=${addTraining}&trainingsIdList=${trainingId}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}