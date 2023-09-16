import {useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import formule from "~/styles/formule.css";
import backofficeFormula from "~/styles/backofficeFormula.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_formulas from "~/components/backoffice_formulas";
import { useGlobalEffect } from "~/helper/globalHelper";
import useGetSubscriptions from "~/hook/useGetSubscriptions";
import {isLogged} from "~/helper/isLogged";


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
    isLogged("backoffice");

    const [formulas, setFormulas] = useState([
            {
                id: 0,
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
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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
                id: 5,
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

    const addFormula = (target: string, id: number) => {
        let newArr = [...formulas]
        newArr.push({
            id: id,
            name: "Formule" + id,
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

    const deleteFormula = (id: number) => {
        let newArr = [...formulas]

        if (id > -1) {
            newArr.splice(id, 1);
        }
        setFormulas(newArr)

    }

    const getSubs = useGetSubscriptions()

    const testGetSubs = () => {
        getSubs()
            .then(data => console.log(data))
    }

    return (
        <>
            <Header_section_page numberUndoPage={1}  title={"Formules"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_formulas_container max_width"}>
                    <div className={"formulas"}>
                        <div className={"formulas_header"}>
                            <h1>Utilisateur : </h1>
                            <button onClick={() => {
                                addFormula("utilisateur", formulas.length + 1)
                            }}>
                                <i className="ri-add-line"></i>
                            </button>
                        </div>
                        {
                            formulas.map((formula, i) => {
                                if (formula.target == "utilisateur") {
                                    return (
                                        <Backoffice_formulas
                                            id={formula.id}
                                            name={formula.name}
                                            rates_price={formula.rates_price}
                                            rates_time={formula.rates_time}
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
                            <button onClick={() => {
                                addFormula("professeur", formulas.length + 1)
                            }}>
                                <i className="ri-add-line"></i>
                            </button>
                        </div>
                        {
                            formulas.map((formula, i) => {
                                if (formula.target == "professeur") {
                                    return (
                                        <Backoffice_formulas
                                            id={formula.id}
                                            name={formula.name}
                                            rates_price={formula.rates_price}
                                            rates_time={formula.rates_time}
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

                    <button className={"button"} onClick={(e) => testGetSubs()}>
                        Test
                    </button>
                </div>
            </section>
        </>
    )
}
