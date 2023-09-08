import { AxiosInstance } from "~/axios/axiosInstance"

export default function useRegister() {
    return (formData: any) => {
        return AxiosInstance({
            url: '/register',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                "email": formData.email,
                "password": formData.password,
                "firstName": formData.firstname,
                "name": formData.name,
                "genre": formData.genre,
                "birthDate": formData.birthDate,
                "nationality": formData.nationality,
                "postalAddress": formData.postalAddress
            })
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}