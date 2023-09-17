import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetCurrentElement() {
    return async (creation_type: string, elementId: number) => {
        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/${creation_type}?id=${elementId}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return res.data[creation_type + "s"][0];
        } catch (err) {
            return console.log(err);
        }
    }
}