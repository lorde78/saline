import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateBuilderElement() {
    return (data:any,creation_type:string) => {

        let newData = {
            "title": data.title,
            "userId": data.userId,
            "description": data.description
        }

        //switch data
        switch (creation_type) {
            case 'training':
                newData = {
                    ...newData,
                    "difficultyLevel": data.difficultyLevel
                }
                break;

            case 'courses':
                newData = {
                    ...newData,
                    "difficultyLevel": data.difficultyLevel
                }
        }

        return AxiosInstance({
            url: '/'+creation_type,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                newData
            })
        })
            .then(res => res.data[creation_type])
            .catch(err => console.log(err))
    }
}