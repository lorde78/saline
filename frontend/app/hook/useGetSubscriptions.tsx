import { AxiosInstance } from "~/axios/axiosInstance"

export default function useGetSubscriptions() {
    return () => {
        return AxiosInstance({
            url: '/subscription',
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.data.subscriptions)
            .catch(err => console.log(err))
    }
}