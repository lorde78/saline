import {AxiosInstance} from "~/axios/axiosInstance";

export default function useLogin() {
    return async (email: string, password: string) => {
        const axiosInstance = AxiosInstance();
        console.log(axiosInstance);
        try {
            const res = await axiosInstance({
                url: '/login',
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    email: email,
                    password: password
                })
            });
            return res.data;
        } catch (err) {
            // @ts-ignore
            return err.response;
        }
    }
}