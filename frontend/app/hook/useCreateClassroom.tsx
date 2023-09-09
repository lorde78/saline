import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateClassroom() {
    return (data:any) => {
        return AxiosInstance({
            url: '/classroom',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                "title": data.title,
                "userId": data.userId,
                "description": data.description
            })
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}