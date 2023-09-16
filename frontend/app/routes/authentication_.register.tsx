import type { V2_MetaFunction } from "@remix-run/node";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import Form_register from "~/components/form_register";
import authentication from "~/styles/authentication.css";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";
import {redirectFromLoginIfLogged} from "~/helper/redirectFromLoginIfLogged";

type LinkProps = {
    rel: string;
    href: string;
};

export const meta: V2_MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export function links(): LinkProps[] {
    return [
        { rel: "stylesheet", href: resetStyles },
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: input },
        { rel: "stylesheet", href: authentication },
    ];
}

export default function Authentication_Register() {
    useGlobalEffect();
    redirectFromLoginIfLogged("user");

    return (
        <div className={"authentication_container"}>
            <Header_section_page numberUndoPage={1} title={"Inscription"} />
            <section className={"max_width_container"}>
                <div className={"max_width"}>
                    <Form_register />
                </div>
            </section>
        </div>
    );
}
