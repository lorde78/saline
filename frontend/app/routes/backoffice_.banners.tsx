import Backoffice_edit_banner from "~/components/backoffice_edit_banner";
import { useState } from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import backofficeBanner from "~/styles/backofficeBanner.css";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalHelper";

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: backofficeBanner }
    ];
}

interface Banner {
    name: string;
    isActive: boolean;
    title: string;
    subTitle: string;
    background: string;
    color: string;
}

export default function Backoffice_Banners() {
    useGlobalEffect();

    const [banners, setBanners] = useState<Banner[]>([
        {
            name: "Header",
            isActive: false,
            title: "zz",
            subTitle: "zz",
            background: "#121525",
            color: "#ffffff"
        },
        {
            name: "Section Instruments",
            isActive: false,
            title: "",
            subTitle: "",
            background: "#121525",
            color: "#ffffff"
        },
        {
            name: "Section Professeurs",
            isActive: false,
            title: "",
            subTitle: "",
            background: "#121525",
            color: "#ffffff"
        },
        {
            name: "Section Formules",
            isActive: false,
            title: "",
            subTitle: "",
            background: "#121525",
            color: "#ffffff"
        },
        {
            name: "Footer",
            isActive: false,
            title: "",
            subTitle: "",
            background: "#121525",
            color: "#ffffff"
        }
    ]);

    const changeValue = (value: any, props: { valuToChange: string, id: number }) => {
        let newArr = [...banners];
        switch (props.valuToChange) {
            case "name":
                newArr[props.id].name = value;
                break;
            case "isActive":
                newArr[props.id].isActive = value;
                break;
            case "title":
                newArr[props.id].title = value;
                break;
            case "subTitle":
                newArr[props.id].subTitle = value;
                break;
            case "background":
                newArr[props.id].background = value;
                break;
            case "color":
                newArr[props.id].color = value;
                break;
        }
        setBanners(newArr);
    };

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Bannières"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_banner_container max_width"}>
                    {banners.map((banner, i) => {
                        return (
                            <Backoffice_edit_banner
                                key={i}
                                id={i}
                                name={banner.name}
                                isActive={banner.isActive}
                                title={banner.title}
                                subTitle={banner.subTitle}
                                background={banner.background}
                                color={banner.color}
                                setValue={changeValue}
                            />
                        );
                    })}
                    <button className={"button"}>Valider les modifications</button>
                </div>
            </section>
        </>
    );
}