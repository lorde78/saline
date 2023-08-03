import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import backofficeBanner from "~/styles/backofficeBanner.css";
import Backoffice_edit_formula from "~/components/backoffice_edit_formula";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: backofficeBanner}
    ]
}

export default function BackofficeFormulas() {

    const [formulas, setFormulas] = useState([
            {
                name: "",
                target: "user",
                rates_price: "0",
                rates_time: "month",
                musts: [
                    {
                        name: "Accès illimité à toutes nos masterclasses.",
                        active: false
                    },
                    {
                        name: "De nouvelles vidéos sont disponibles chaque mois.",
                        active: false
                    },
                    {
                        name: "Des interviews exclusives avec les plus grands professeurs du monde.",
                        active: false
                    },
                    {
                        name: "Partitions annotées par nos professeurs et prêtes à être téléchargées.",
                        active: false
                    },
                    {
                        name: "Vidéos multi-angles disponibles en HD sur tous vos appareils.",
                        active: false
                    },
                    {
                        name: "Contacter le professeurs",
                        active: false
                    },
                    {
                        name: "Partition expliqué par le professeur",
                        active: false
                    }
                ]

            }
        ]
    )
    const changeValue = (value, props) => {
        let newArr = [...formulas]
        switch (props.valuToChange) {
            case "name" :
                newArr[props.id].name = value
                break
            case "target" :
                newArr[props.id].target = value
                break
            case "rates_price" :
                newArr[props.id].rates_price = value
                break
            case "rates_time" :
                newArr[props.id].rates_time = value
                break
            case "musts" :
                newArr[props.id].musts[props.mustID].active = value
                break
        }
        setFormulas(newArr)
    }

    return (
        <div className={"backoffice_formulas_container"}>
            <div className={"formulas_header"}>
                <h1>Utilisateur : </h1>
                <button><i className="ri-add-line"></i></button>
            </div>
            {
                formulas.map((formula, i) => {
                    if (formula.target == "user") {
                        return (
                            <Backoffice_edit_formula
                                id={i}
                                name={formula.name}
                                target={formula.target}
                                rates_price={formula.rates_price}
                                rates_time={formula.rates_time}
                                musts={formula.musts}
                                setValue={changeValue}
                            />
                        )
                    }
                })
            }
            <div className={"formulas_header"}>
                <h1>Professeur : </h1>
                <button><i className="ri-add-line"></i></button>
            </div>
            {
                formulas.map((formula, i) => {
                    if (formula.target == "professor") {
                        return (
                            <Backoffice_edit_formula
                                id={i}
                                name={formula.name}
                                target={formula.target}
                                rates_price={formula.rates_price}
                                rates_time={formula.rates_time}
                                musts={formula.musts}
                                setValue={changeValue}
                            />
                        )
                    }
                })
            }
            <button className={"button"}>
                Valider les modifications
            </button>
        </div>

    )
}
