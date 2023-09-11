import { AxiosInstance } from "~/axios/axiosInstance";

export default function useDeleteElement() {
    return (creation_type:string,lessonId:any,) => {

        return AxiosInstance({
            url: `/${creation_type}?id=${lessonId}`,
            method: 'delete',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}