import { AxiosInstance } from "~/axios/axiosInstance";

export default function useUpdateUser() {
    return async (formData:any,userId: number,passChange:boolean,roleChange:boolean) => {

        try {
            const res = await AxiosInstance({
                url: `/user?id=${userId}&passChange=${passChange}&roleChange=${roleChange}`,
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(formData)
            });
            return console.log(res.data);
        } catch (err) {
            return console.log(err);
        }
    }
}