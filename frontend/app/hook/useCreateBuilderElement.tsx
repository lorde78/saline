import { AxiosInstance } from "~/axios/axiosInstance";

export default function useCreateBuilderElement() {
    return async (formData: any, creation_type: string) => {
        switch(creation_type) {
            case 'subscription':
                try {
                    const res = await AxiosInstance({
                        url: `/${creation_type}`,
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            title: formData.title,
                            rates_price: formData.rates_price,
                            rates_time: formData.rates_time,
                            target: formData.target,
                            access: formData.access
                        }
                    });
                    return res.data[creation_type];
                } catch (err) {
                    return console.log(err);
                }

            default:
                try {
                    const res = await AxiosInstance({
                        url: `/${creation_type}`,
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: new URLSearchParams(formData).toString()
                    });
                    return res.data[creation_type];
                } catch (err) {
                    return console.log(err);
                }
        }

    }
}