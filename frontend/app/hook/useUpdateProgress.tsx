import { AxiosInstance } from "~/axios/axiosInstance";

export default function useUpdateProgress() {
    return async (formData:any,progressId:number) => {
        let contentType = null;
        let data = null;
        if(formData.progress) {
            contentType = 'application/json';
            data = { progress: formData.progress };
        } else {
            contentType = 'application/x-www-form-urlencoded';
            data = new URLSearchParams(formData)
        }

        try {
            const res = await AxiosInstance({
                url: `/progressLesson?id=${progressId}`,
                method: 'put',
                headers: {
                    'Content-Type': contentType
                },
                data: data
            });
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }
}