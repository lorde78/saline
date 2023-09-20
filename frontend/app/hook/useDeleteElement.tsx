import { AxiosInstance } from "~/axios/axiosInstance";

export default function useDeleteElement() {
    return async (creation_type: string, elementId: any,) => {

        try {
            const res = await AxiosInstance({
                url: `/${creation_type}?id=${elementId}`,
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