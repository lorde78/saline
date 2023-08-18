import type {V2_MetaFunction} from "@remix-run/node";
import Builder_navigation from "~/components/builder_navigation";
import Builder_step_review from "~/components/builder_step_review";

import Builder_select_step from "~/components/builder_select_step";

import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import builder from "~/styles/builder.css";
import Builder_step_video from "~/components/builder_step_video";
import Builder_step_exercice from "~/components/builder_step_exercice";


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
        {rel:'stylesheet', href: input},
        {rel: 'stylesheet', href: builder}
    ]
}

export default function Cours_CoursIdEdit() {
    return (
        <div className={"builder_container"}>
            <Builder_navigation />
            {/*<Builder_select_step />*/}
            {/*<Builder_step_video />*/}
            <Builder_step_exercice />
        </div>
    );
}
