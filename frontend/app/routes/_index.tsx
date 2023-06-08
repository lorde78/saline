import type {V2_MetaFunction} from "@remix-run/node";
import Test_components from "~/components/Test_components";
import resetStyles from "~/style/reset.css";
import styles from "~/style/style.css";
import Form_login from "~/components/form_login";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: styles}]
}

export default function Index() {
    return (
        <>
            <header>

            </header>
            <main style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
                <Form_login />
                <Form_register />
                <Form_register_complementary />
            </main>
            <footer>

            </footer>
        </>
    );
}
