import { AxiosInstance } from "~/axios/axiosInstance";

export default function useRemoveTrainingFromClassroom() {
    return async (trainingId: any, addTraining: boolean, classroomId: number) => {

        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/classroom?id=${classroomId}&addTraining=${addTraining}&trainingsIdList=${trainingId}`,
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