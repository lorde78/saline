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

    const [banners, setBanners] = useState([
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
    ])
    const changeValue = (value, props) => {
        let newArr = [...banners]
        switch (props.valuToChange) {
            case "name" :
                newArr[props.id].name = value
                break
            case "isActive" :
                newArr[props.id].isActive = value
                break
            case "title" :
                newArr[props.id].title = value
                break
            case "subTitle" :
                newArr[props.id].subTitle = value
                break
            case "background" :
                newArr[props.id].background = value
                break
            case "color" :
                newArr[props.id].color = value
                break
        }
        setBanners(newArr)
    }

    return (
        <div className={"backoffice_banner_container"}>
            {
                banners.map((banner, i) => {
                    return (
                        <Backoffice_edit_banner
                            id={i}
                            name={banner.name}
                            isActive={banner.isActive}
                            title={banner.title}
                            subTitle={banner.subTitle}
                            background={banner.background}
                            color={banner.color}
                            setValue={changeValue}
                        />
                    )
                })
            }
            <button className={"button"}>
                Valider les modifications
            </button>
        </div>

    )
}
