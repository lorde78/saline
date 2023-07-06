import type {V2_MetaFunction} from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Builder_block_button from "~/kits/builder_block_button";
import resetStyles from "~/styles/reset.css"
import styles from "~/styles/style.css"
import builder from "~/styles/builder.css"
import input from "~/styles/input.css"
import Builder_select_folder from "~/kits/builder_select_folder";
import Select_image from "~/kits/select_image";

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

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>

            <Builder_block_button contents={"Vidéo"} icon={"ri-vidicon-line"}/>
            <Builder_select_folder icon={"ri-vidicon-line"} folderType={"video/mp4"} idType={"video"} buttonMessage={"Choisi une vidéo"}/>
            <Builder_select_folder icon={"ri-file-2-line"} folderType={"application/pdf"} idType={"pdf"} buttonMessage={"Choisi un fichier pour ton énoncé"} />
            <Select_image/>
        </div>
    );
}
