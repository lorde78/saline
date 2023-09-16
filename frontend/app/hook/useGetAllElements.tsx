import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetAllElements() {
    return async (creation_type: string,queryParams: string) => {
        try {
            const res = await AxiosInstance({
                url: `/${creation_type}${queryParams}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return res.data[creation_type + "s"];
        } catch (err) {
            return console.log(err);
        }
    }
}