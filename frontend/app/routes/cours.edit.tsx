import type {V2_MetaFunction} from "@remix-run/node";
import Builder_navigation from "~/components/builder_navigation";
import Builder_select_step from "~/components/builder_select_step";

import "~/styles/reset.css"
import "~/styles/style.css"
import "~/styles/input.css"
import "~/styles/builder.css"


export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};


export default function CoursEdit() {
    return (
        <div className={"builder_container"}>
            <Builder_navigation />
            <Builder_select_step />
        </div>
    );
}
