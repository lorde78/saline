import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddStudentsToClassroom() {
    return async (studentsIdList: any, addStudent: boolean, classroomId: number) => {
        const keys = Object.keys(studentsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/classroom?id=${classroomId}&addStudent=${addStudent}&studentsIdList=${encodeURIComponent(encodedList)}`,
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }
}