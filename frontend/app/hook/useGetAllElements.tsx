import { AxiosInstance } from "~/axios/axiosInstance";

export default function useGetAllElements() {
    return (creation_type:string) => {
        return AxiosInstance({
            url: '/'+creation_type,
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data[creation_type+"s"])
            .catch(err => console.log(err))
    }
}