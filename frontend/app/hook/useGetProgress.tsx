import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetProgress() {
    return async (progress_type: string, paramElement?:string, element_id?: number) => {
        let url = paramElement ? `/${progress_type}?${paramElement}=${element_id}` : `/${progress_type}`

        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: url,
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