import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import formule from "~/styles/formule.css";
import backofficeFormula from "~/styles/backofficeFormula.css";
import Backoffice_edit_formula from "~/components/backoffice_edit_formula";


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

    const [formulas, setFormulas] = useState([
            {
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
            },
            {
                name: "Annuel",
                target: "utilisateur",
                rates_price: "118.8",
                rates_time: "an",
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
            },
            {
                name: "Mensuel",
                target: "utilisateur",
                rates_price: "19.8",
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
            },
            {
                name: "Gratuit",
                target: "professeur",
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
            },
            {
                name: "Annuel",
                target: "professeur",
                rates_price: "118.8",
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
            },
            {
                name: "Mensuel",
                target: "professeur",
                rates_price: "19.8",
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

    const addFormula = (target:string, id:number) => {
        let newArr = [...formulas]
        newArr.push({
            name: "Formule"+id,
            target: target,
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
        setFormulas(newArr)
    }

    const deleteFormula = (id) => {
        let newArr = [...formulas]

        if (id > -1) {
            newArr.splice(id, 1);
        }
        setFormulas(newArr)

    }

    return (
        <div className={"backoffice_formulas_container"}>
            <div className={"formulas"}>
                <div className={"formulas_header"}>
                    <h1>Utilisateur : </h1>
                    <button onClick={() => {addFormula("utilisateur", formulas.length + 1)}}>
                        <i className="ri-add-line"></i>
                    </button>
                </div>
                {
                    formulas.map((formula, i) => {
                        if (formula.target == "utilisateur") {
                            return (
                                <Backoffice_edit_formula
                                    id={i}
                                    name={formula.name}
                                    target={formula.target}
                                    rates_price={formula.rates_price}
                                    rates_time={formula.rates_time}
                                    musts={formula.musts}
                                    setValue={changeValue}
                                    deleteFormula={deleteFormula}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className={"formulas"}>
                <div className={"formulas_header"}>
                    <h1>Professeur : </h1>
                    <button onClick={() => {addFormula("professeur", formulas.length + 1)}}>
                        <i className="ri-add-line"></i>
                    </button>
                </div>
                {
                    formulas.map((formula, i) => {
                        if (formula.target == "professeur") {
                            return (
                                <Backoffice_edit_formula
                                    id={i}
                                    name={formula.name}
                                    target={formula.target}
                                    rates_price={formula.rates_price}
                                    rates_time={formula.rates_time}
                                    musts={formula.musts}
                                    setValue={changeValue}
                                    deleteFormula={deleteFormula}
                                />
                            )
                        }
                    })
                }
            </div>
            <button className={"button"}>
                Valider les modifications
            </button>
        </div>

    )
}
