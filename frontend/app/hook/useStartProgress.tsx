import { AxiosInstance } from "~/axios/axiosInstance";

export default function useStartProgress() {
    return async (progress_type: string, formData:any) => {
        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/${progress_type}`,
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(formData).toString()
            });
            return res.data[progress_type];
        } catch (err) {
            return console.log(err);
        }
    }
}