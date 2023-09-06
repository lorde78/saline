import {LoaderFunction, json, type V2_MetaFunction, ActionFunction} from "@remix-run/node";
import {NavLink, useLoaderData} from "@remix-run/react";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import Form_login from "~/components/form_login";
import { salineJWTCookie } from "~/cookie.server";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: authentication}
    ]
}

export let action: ActionFunction = async ({ request }) => {
    const cookies = request.headers.get('Cookie')
    const cookie = (await salineJWTCookie.parse(cookies)) || {}
    const bodyParams = await request.formData()

    console.log(bodyParams)
}

export let loader: LoaderFunction = async ({ request }) => {
    const cookies = request.headers.get('Cookie') || ''
    const cookieMap = Object.fromEntries(cookies.split(';').map(cookie => {
        const [key, value] = cookie.trim().split('=')
        return [key, value]
    }))

    const valeur = cookieMap['SalineToken'] || "hello";
    
    const response = json({})
    response.headers.append('Set-Cookie',`SalineToken=${valeur}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`)
    return response
}

export default function Backoffice_Login() {

    return (
        <div className={"authentication_container"}>
            <NavLink className={"image_authentication"} to={"/"}>
                <img
                    src={"https://www.salineacademy.com/wp-content/uploads/2022/12/627e08e5d58166bb632daf54_logo_sra_black.svg"}/>
            </NavLink>
            <section className={"max_width_container"}>
                <div className={"max_width"} style={{textAlign:"center", marginTop:"40px"}}>
                    <h1>Admin</h1>
                    <Form_login/>
                </div>
            </section>
        </div>
    );
}
