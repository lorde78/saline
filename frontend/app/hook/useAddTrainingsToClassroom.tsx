import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddTrainingsToClassroom() {
    return async (trainingsIdList: any, addToClassroom: boolean, classroomId: number) => {
        const keys = Object.keys(trainingsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/classroom?id=${classroomId}&addTraining=${addToClassroom}&trainingsIdList=${encodeURIComponent(encodedList)}`,
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