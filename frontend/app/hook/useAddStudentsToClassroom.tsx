import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddStudentsToClassroom() {
    return (studentsIdList:any,addStudent:boolean,classroomId:number) => {
        const keys = Object.keys(studentsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        return AxiosInstance({
            url: `/classroom?id=${classroomId}&addStudent=${addStudent}&studentsIdList=${encodeURIComponent(encodedList)}`,
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}