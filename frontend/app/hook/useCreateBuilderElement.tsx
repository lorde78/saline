import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateBuilderElement() {
    return (formData:any,creation_type:string) => {
        return AxiosInstance({
            url: `/${creation_type}`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams(formData).toString()
        })
            .then(res => res.data[creation_type])
            .catch(err => console.log(err))
    }
}