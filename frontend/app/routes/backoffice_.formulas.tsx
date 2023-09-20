import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import formule from "~/styles/formule.css";
import backofficeFormula from "~/styles/backofficeFormula.css";
import Header_section_page from "~/kits/header_section_page";
import Backoffice_formulas from "~/components/backoffice_formulas";
import {useGlobalEffect} from "~/helper/globalHelper";
import {isLogged} from "~/helper/isLogged";
import useGetAllElements from "~/hook/useGetAllElements";
import useDeleteElement from "~/hook/useDeleteElement";
import useCreateBuilderElement from "~/hook/useCreateBuilderElement";


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
    useGlobalEffect("backoffice");

    const [formulas, setFormulas] = useState([]);
    const getAllFormulas = useGetAllElements();

    const createElement = useCreateBuilderElement()
    const deleteElement = useDeleteElement();

    useEffect(() => {
        getAllFormulas("subscription", "").then((r: any) => {
            if (!formulas.length) {
                setFormulas(r);
            }
        })
    }, []);

    const addFormula = async (target: string) => {
        let newFormulas: any = [...formulas];

        let newFormula = {
            title: "Nouvelle Formule",
            target: target,
            rates_price: 0,
            rates_time: "mois",
            access: [
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
        };
        await createElement(newFormula, "subscription")
            .then(formula => newFormulas.push(formula));

        setFormulas(newFormulas);
    }

    const deleteFormula = (id: number) => {
        let newArr = formulas.filter((formula: any) => formula.id !== id);
        setFormulas(newArr);
        deleteElement("subscription", id);
    }

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Formules"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"backoffice_formulas_container max_width"}>
                    <div className={"formulas"}>
                        <span>Pensez à enregistrer vos modifications avant d'éditer une nouvelle formule.</span>
                        <div className={"formulas_header"}>
                            <h1>Les formules d'abonnement : </h1>
                        </div>
                        {(formulas ?? []).length !== 0 ? (
                            formulas.map((formula: any, i) => {
                                if (formula.target == "utilisateur") {
                                    return (
                                        <Backoffice_formulas
                                            id={formula.id}
                                            name={formula.title}
                                            rates_price={formula.rates_price}
                                            rates_time={formula.rates_time}
                                            deleteFormula={deleteFormula}
                                        />
                                    )
                                }
                            })
                        ) : (
                            <p>Aucune formule d'abonnement n'existe pour le moment.</p>
                        )}
                        <button className={"button"} onClick={() => { addFormula("utilisateur") }}>
                            Ajouter une nouvelle formule
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}
