import { AxiosInstance } from "~/axios/axiosInstance";

export default function useUploadFile() {
    return async (formData: any, file_type: string) => {
        let directory = null;
        switch(file_type) {
            case 'documentations':
                directory = "uploads/files/documentations/"
                break;

            case 'instructions':
                directory = "uploads/files/instructions/"
                break;

            case 'review':
                directory = "uploads/files/reviews/"
                break;

            case 'image':
                directory = "uploads/images/"
                break;
        }

        try {
            const res = await AxiosInstance({
                url: `/upload?dir=${directory}`,
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });
            return res.data["pictureUrl"];
        } catch (err) {
            return console.log(err);
        }
    }
}