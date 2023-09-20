import { AxiosInstance } from "~/axios/axiosInstance";

export default function useUpdateBuilderElement() {
    return async (formData: any, creation_type: string,elementId: number) => {
        switch(creation_type) {
            case 'subscription':
                try {
                    const res = await AxiosInstance({
                        url: `/${creation_type}?id=${elementId}`,
                        method: 'put',
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
                        url: `/${creation_type}?id=${elementId}`,
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: new URLSearchParams(formData)
                    });
                    return res.data[creation_type];
                } catch (err) {
                    return console.log(err);
                }
        }

    }
}