import { AxiosInstance } from "~/axios/axiosInstance";

export default function useAddStepsToLesson() {
    return async (stepsData: any, updateSteps: boolean, lessonId: number) => {

        try {
            const res = await AxiosInstance({
                url: `/lesson?id=${lessonId}&updateSteps=${updateSteps}`,
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    steps: stepsData
                }
            });
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }
}