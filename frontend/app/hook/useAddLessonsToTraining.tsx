import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddLessonsToTraining() {
    return async (lessonsIdList: any, addToTraining: boolean, trainingId: number) => {
        const keys = Object.keys(lessonsIdList)
        const arrayIdList = keys.map(Number)
        const encodedList = JSON.stringify(arrayIdList)

        try {
            const res = await AxiosInstance({
                url: `/training?id=${trainingId}&addToTraining=${addToTraining}&lessonsIdList=${encodeURIComponent(encodedList)}`,
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