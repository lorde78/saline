import {useEffect, useState} from "react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import formule from "~/styles/formule.css";
import backofficeFormula from "~/styles/backofficeFormula.css";
import Backoffice_edit_formula from "~/components/backoffice_edit_formula";
import Header_section_page from "~/kits/header_section_page";
import {useGlobalEffect} from "~/helper/globalHelper";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";
import Loader from "~/kits/loader";

interface FormulaMust {
    name: string;
    active: boolean;
}

interface Formula {
    id: number;
    title: string;
    target: string;
    rates_price: string;
    rates_time: string;
    access: FormulaMust[];
}

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: formule},
        {rel: 'stylesheet', href: backofficeFormula}
    ];
}

export default function Backoffice_Formulas() {
    useGlobalEffect("backoffice");

    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0);

    const [formula, setFormula] = useState<Formula | null>(null);
    const getCurrentFormula = useGetCurrentElement();

    const getFormula = async () => {
        const currentFormula = await getCurrentFormula("subscription", getCurrentId);
        //@ts-ignore
        setFormula(currentFormula);
        setLoader(true);
    }

    useEffect(() => {
        getFormula();
    }, []);

    const changeValue = (value: any, props: any) => {
        let newFormula = {...formula};
        switch (props.valuToChange) {
            case "name":
                newFormula.title = value;
                break;
            case "target":
                newFormula.target = value;
                break;
            case "rates_price":
                newFormula.rates_price = value;
                break;
            case "rates_time":
                newFormula.rates_time = value;
                break;
            case "access":
                // @ts-ignore
                newFormula.access[props.mustID].active = value;
                break;
        }
        // @ts-ignore
        setFormula(newFormula);
    };

    return (
        <>
            {loader ? (
                <>
                    <Header_section_page numberUndoPage={1} title={formula?.title || ""} logout={true}/>
                    <section className={"max_width_container"}>
                        <div className={"backoffice_formulas_container max_width"}>
                            <Backoffice_edit_formula
                                id={formula?.id || parseInt("")}
                                name={formula?.title || ""}
                                rates_price={formula?.rates_price || ""}
                                access={formula?.access}
                                setValue={changeValue}
                            />
                        </div>
                    </section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}