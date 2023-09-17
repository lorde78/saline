import { AxiosInstance } from "~/axios/axiosInstance"

export default function useGetSubscriptions() {
    return async () => {
        try {
            const axiosInstance = AxiosInstance();
            const res = await axiosInstance({
                url: '/subscription',
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            return res.data.subscriptions
        } catch (err) {
            return console.log(err)
        }
    }
}