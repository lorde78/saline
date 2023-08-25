import type {V2_MetaFunction} from "@remix-run/node";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";


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

export default function Authentication_Register_Complementary() {
    return (
        <>
            <Header_section_page title={"Inscription"}/>
            <section className={"max_width_container"}>
                <div className={"max_width"}>
                    <Form_register_complementary/>
                </div>
            </section>
        </>
    );
}
