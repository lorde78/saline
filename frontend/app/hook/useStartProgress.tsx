import { AxiosInstance } from "~/axios/axiosInstance";

export default function useStartProgress() {
    return async (progress_type: string,formData:any) => {
        try {
            const res = await AxiosInstance({
                url: `/${progress_type}`,
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    status: formData.status,
                    studentId: formData.studentId,
                    trainingId: formData.trainingId
                })
            });
            return res.data[progress_type];
        } catch (err) {
            return console.log(err);
        }
    }
}