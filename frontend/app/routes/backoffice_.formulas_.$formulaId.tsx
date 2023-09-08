import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import formule from "~/styles/formule.css";
import backofficeFormula from "~/styles/backofficeFormula.css";
import Backoffice_edit_formula from "~/components/backoffice_edit_formula";
import Header_section_page from "~/kits/header_section_page";
import { useGlobalEffect } from "~/helper/globalMiddleware";


export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formule},
        {rel: 'stylesheet', href: backofficeFormula}
    ]
}

export default function Backoffice_Formulas() {
    useGlobalEffect()

    const [formula, setFormula] = useState({
        id: 1,
        name: "Gratuit",
        target: "utilisateur",
        rates_price: "0",
        rates_time: "mois",
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
    })
    const changeValue = (value: any, props: any) => {
        let newFormula = {...formula}
        switch (props.valuToChange) {
            case "name" :
                newFormula.name = value
                break
            case "target" :
                newFormula.target = value
                break
            case "rates_price" :
                newFormula.rates_price = value
                break
            case "rates_time" :
                newFormula.rates_time = value
                break
            case "musts" :
                newFormula.musts[props.mustID].active = value
                break
        }
        setFormula(newFormula)
    }

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={formula.name}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_formulas_container max_width"}>
                    <Backoffice_edit_formula
                        id={formula.id}
                        name={formula.name}
                        rates_price={formula.rates_price}
                        musts={formula.musts}
                        setValue={changeValue}
                    />
                </div>
            </section>
        </>
    )
}
