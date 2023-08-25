import type {V2_MetaFunction} from "@remix-run/node";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import Form_register from "~/components/form_register";


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
        {rel: 'stylesheet', href: input}
    ]
}

export default function Authentication_Register() {
    return (
        <section className={"max_width_container"}>
            <div className={"max_width"}>
                <Form_register/>
            </div>
        </section>
    );
}
