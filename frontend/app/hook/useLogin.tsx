import { AxiosInstance } from "~/Axios/axiosInstance";

export default function useLogin() {
    return (email: string,password: string) => {
        return AxiosInstance({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                email: email,
                password: password
            })
        })
            .then(res => res.data)
    }
}