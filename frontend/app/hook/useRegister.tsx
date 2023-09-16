import { AxiosInstance } from "~/axios/axiosInstance"

export default function useRegister() {
    return async (formData: any) => {
        try {
            const res = await AxiosInstance({
                url: '/register',
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    "email": formData.email,
                    "password": formData.password,
                    "firstName": formData.firstName,
                    "name": formData.name,
                    "genre": formData.genre,
                    "birthDate": formData.birthDate,
                    "nationality": formData.nationality,
                    "postalAddress": formData.postalAddress,
                    "profilePicture": formData.profilePicture
                })
            })
            return res.data
        } catch (err) {
            return console.log(err)
        }
    }
}