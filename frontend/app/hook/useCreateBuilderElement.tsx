import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateBuilderElement() {
    return async (formData: any, creation_type: string) => {
        try {
            const res = await AxiosInstance({
                url: `/${creation_type}`,
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });
            return res.data[creation_type];
        } catch (err) {
            return console.log(err);
        }
    }
}