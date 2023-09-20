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
import {useEffect, useState} from "react";
import getIdFromUrl from "~/helper/getIdFromUrl";
import useGetCurrentElement from "~/hook/useGetCurrentElement";

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

interface Training {
    id: number;
    title: string;
    author: string;
    bannerPicture: string;
    description: string;
    trainings: { id: number }[];
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
    const [loader, setLoader] = useState(false);
    const getCurrentId = getIdFromUrl(0);

    const [training, setTraining] = useState<Training | null>(null);
    const getCurrentTraining = useGetCurrentElement();

    const getTraining = async () => {
        const currentTraining = await getCurrentTraining("training", getCurrentId);
        setTraining(currentTraining);
        console.log(currentTraining);
        setLoader(true);
    }

    useEffect(() => {
        getTraining();
    }, []);

    return (
        <>
            <Header_section_page numberUndoPage={1} title={"Créer un parcours"} logout={true}/>
            <section className={"max_width_container"}>
                <div className={"builder_container max_width"}>
                    {/* @ts-ignore */}
                    <Builder_creation creation_type={"training"} relId={loaderData.relId} relType={loaderData.relType} elementData={training} hookType={"update"}/>
                </div>
            </section>
        </>
    );
}
