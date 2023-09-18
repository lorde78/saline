import { useLoaderData } from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import training from "~/styles/backofficeTraining.css";
import Header_section_page from "~/kits/header_section_page";
import Builder_creation from "~/components/builder_creation";
import { useGlobalEffect } from "~/helper/globalHelper";
import { LoaderFunction } from "@remix-run/node";
import {isLogged} from "~/helper/isLogged";

interface LoaderData {
    relId: string | null;
    relType: string | null;
}

export function links() {
    return [
        { rel: 'stylesheet', href: resetStyles },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: input },
        { rel: 'stylesheet', href: training }
    ];
}

export let loader: LoaderFunction = ({ request }) => {
    let url = new URL(request.url);
    let relId = url.searchParams.get('relId');
    let relType = url.searchParams.get('relType');
    return { relId, relType };
}

export default function Backoffice_Trainings_New() {
    useGlobalEffect("backoffice");
    const loaderData = useLoaderData<LoaderData>();

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Créer un parcours"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    {/* @ts-ignore */}
                    <Builder_creation creation_type={"training"} relId={loaderData.relId} relType={loaderData.relType} />
                </div>
            </section>
        </>
    );
}
