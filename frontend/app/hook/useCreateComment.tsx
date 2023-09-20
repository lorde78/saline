import {AxiosInstance} from "~/axios/axiosInstance";

export default function useCreateComment() {
    return async (formData: any) => {

        try {
            const res = await AxiosInstance({
                url: `/comment`,
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(formData).toString()
            });
            return res.data["comments"];
        } catch (err) {
            return console.log(err);
        }
    }

}