import axios from "axios";
import {json, LoaderArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

const loader = async ({params}: LoaderArgs) => {
    return json({
        ENV: {
            BASE_URL: process.env.BASE_URL
        },
    });
};

export const AxiosInstance = () => {
    const loaderData = useLoaderData<typeof loader>();

    const baseURL = loaderData.ENV.BASE_URL;

    return axios.create({
        baseURL: `${baseURL}`,
        withCredentials: true
    });
};