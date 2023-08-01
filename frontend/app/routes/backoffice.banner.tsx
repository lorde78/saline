import Backoffice_edit_banner from "~/components/backoffice_edit_banner";
import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import backofficeBanner from "~/styles/backofficeBanner.css";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: backofficeBanner}
    ]
}

export default function BackofficeBanner() {
    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("Titre")
    const [subTitle, setSubTitle] = useState("sous titre")
    const [background, setBackground] = useState("#E5AA52")


    return (
        <Backoffice_edit_banner
            name={"Header"}
            isActive={isActive}
            title={title}
            subTitle={subTitle}
            background={background}
            setIsActive={setIsActive}
            setTitle={setTitle}
            setSubTitle={setSubTitle}
            setBackground={setBackground}
        />
    )
}
