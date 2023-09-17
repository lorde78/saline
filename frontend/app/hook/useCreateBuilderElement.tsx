import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateBuilderElement() {
    return async (formData: any, creation_type: string) => {
        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: `/${creation_type}`,
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(formData).toString()
            });
            return res.data[creation_type];
        } catch (err) {
            return console.log(err);
        }
    }
}