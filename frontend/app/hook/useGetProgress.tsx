import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetProgress() {
    return async (progress_type: string, paramElement:string, element_id: number) => {
        try {
            const res = await AxiosInstance({
                url: `/${progress_type}?${paramElement}=${element_id}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return res.data[progress_type];
        } catch (err) {
            return console.log(err);
        }
    }
}