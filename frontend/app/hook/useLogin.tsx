import { AxiosInstance } from "~/Axios/axiosInstance";

export default function useLogin() {
    return (username: string,password: string) => {
        return AxiosInstance({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
    }
}