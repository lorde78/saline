import { AxiosInstance } from "~/axios/axiosInstance";

export default function useDeleteElement() {
    return async (creation_type: string, lessonId: any,) => {

        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/${creation_type}?id=${lessonId}`,
                method: 'delete',
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