import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetCurrentElement() {
    return (creation_type:string,elementId:number) => {
        return AxiosInstance({
            url: `/${creation_type}?id=${elementId}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}