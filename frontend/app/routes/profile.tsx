import type {V2_MetaFunction} from "@remix-run/node";
import resetStyles from "~/style/reset.css";
import styles from "~/style/style.css";


export function links() {
    return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: styles}]
}


export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};
export default function Profile() {
    return (
        <div>
            hello world
        </div>
    )
}