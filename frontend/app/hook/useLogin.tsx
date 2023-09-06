import { AxiosInstance } from "~/axios/axiosInstance";

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
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
}