import { AxiosInstance } from "~/axios/axiosInstance";

export default function useRemoveLessonFromTraining() {
    return async (lessonsId: any, addToTraining: boolean, trainingId: number) => {

        try {
            const res = await AxiosInstance({
                url: `/training?id=${trainingId}&addToTraining=${addToTraining}&lessonsIdList=${lessonsId}`,
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