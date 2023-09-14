import 'remixicon/fonts/remixicon.css'
import Header from "~/components/header";
import Footer from "~/components/footer";
import Loader from "~/kits/loader";
import {useGlobalEffect} from "~/helper/globalHelper";
import {useEffect, useState} from "react";
import useGetAllElements from "~/hook/useGetAllElements";
import {NavLink} from "@remix-run/react";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import input from "~/styles/input.css";
import stylesRefacto from "~/styles/styleRefacto.css";

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: stylesRefacto},
    ]
}

export default function Professors() {
    useGlobalEffect()
    const [loader, setLoader] = useState(false);

    const [professors, setProfessors] = useState([]);
    // @ts-ignore
    const getAllTrainings = useGetAllElements();

    const getProfessors = async () => {
        const currentTraining = await getAllTrainings("training", "");
        // setProfessors(currentTraining);
        let data = [
            {
                informations : {
                    id: 1,
                    firstName: "Nelson",
                    lastName: "Goerner",
                    imageLink: "/assets/images/1000x1500-pour-site14.png",
                    description: "Nelson Goerner est l’un des plus grands pianistes classiques d’aujourd’hui. Il est salué pour ses performances de l’art et de la poésie les plus élevés, tout en possédant une conviction exaltante et magistrale.<br/> Au cours de la saison 2019-2020, Nelson Goerner donnera des récitals sur certaines des scènes les plus importantes du monde, dont le Théâtre des Champs-Elysées de Paris, le Wigmore Hall de Londres, le BOZAR de Bruxelles et le Cloitre des Jacobins de Toulouse, et donnera des concerts avec l’Orchestre Symphonique de La Monnaie et Alain Altinoglu, l’Orchestre Philharmonique de Radio France et Myung-Whun Chung, et le Luzerner Sinfonieorchester sous la direction de Lawrence Foster.<br/> Nelson Goerner a joué avec de nombreux grands orchestres d’aujourd’hui, dont le Philharmonia Orchestra, l’Orchestre de Paris, le London Philharmonic Orchestra, la Deutsche Kammerphilharmonie, le Hallé Orchestra, le Sinfonia Varsovia et le NHK Symphony Orchestra, ainsi qu’avec plusieurs des plus grands chefs d’orchestre actuels tels que Vladimir Ashkenazy, Philippe Herreweghe , Neeme Järvi, Sir Mark Elder, Paavo Järvi, Vassily Sinaisky, Jonathan Nott, Fabio Luisi et Esa-Pekka Salonen. Ses apparitions dans les festivals comprennent les engagements les plus prestigieux d’aujourd’hui, dont le Festival de Salzbourg, La Roque d’Anthéron, La Grange de Meslay, le Festival international d’Édimbourg, le Festival de Verbier, La Folle Journée (Nantes et Tokyo), le Schleswig-Holstein, le ‘Chopin de Varsovie et son Europe’ et les BBC Proms.Chambriste passionné, Nelson Goerner a collaboré avec des artistes tels que Martha Argerich (au répertoire pour deux pianos), Janine Jansen, Steven Isserlis et Gary Hoffman. La saison 2019-20 comprendra une série de récitals en duo avec Sol Gabetta en Italie et Renaud Capuçon en Suisse.Nelson Goerner entretient des relations étroites avec le Mozarteum Argentino de Buenos Aires et jouit d’une longue association avec l’Institut Chopin de Varsovie, dont il est membre du comité consultatif artistique. Il a sorti plusieurs albums au répertoire atypique sur la propre maison de disques de l’Institut, le dernier en date, en 2019, avec des œuvres de Godowski et Paderewski, dont les monumentales Variations et Fugue op.23. Son enregistrement des Ballades et Nocturnes de Chopin a été récompensé par un Diapason d’Or.<br/> Nelson Goerner enregistre principalement pour Alpha Classics et sa discographie pour eux comprend des œuvres de Chopin, Beethoven, Brahms, Debussy, Schumann, Fauré et Franck. De nombreux albums de Goerner ont été nommés enregistrements « de référence ». Les récompenses incluent : Diapason d’Or de l’année pour son enregistrement de Debussy ; Enregistrement du mois par BBC Music Magazine pour son album d’œuvres de Schumann ; Choc de Classica et Diapason d’Or pour son album Chopin Preludes ; ainsi que des éloges retentissants de la critique pour son enregistrement de la Sonate Hammerklavier Op 106 de Beethoven.<br/> Nelson Goerner est né à San Pedro, en Argentine, en 1969. Après avoir étudié en Argentine avec Jorge Garrubba, Juan Carlos Arabian et Carmen Scalcione, il obtient le Premier Prix du Concours Franz Liszt de Buenos Aires en 1986. Cela a conduit à une bourse pour travailler avec Maria Tipo au Conservatoire de Genève et, en 1990, Nelson Goerner a remporté le Premier Prix au Concours de Genève.<br/> Nelson Goerner vit en Suisse avec sa femme et son fils. Il soutient fièrement et activement l’organisation humanitaire Ammala.",
                    roles : [
                        {
                            id: 1,
                            title: "Professeur"
                        }
                    ],
                    instruments: [
                        {
                            id: 1,
                            title: "Piano"
                        }
                    ]
                },
                formations: [
                    {
                        id: 1,
                        title: "Formation 1"
                    }
                ]

            },
            {
                informations : {
                    id: 2,
                    firstName: "Nelson",
                    lastName: "Goerner",
                    imageLink: "/assets/images/1000x1500-pour-site14.png",
                    description: "Nelson Goerner est l’un des plus grands pianistes classiques d’aujourd’hui. Il est salué pour ses performances de l’art et de la poésie les plus élevés, tout en possédant une conviction exaltante et magistrale.<br/> Au cours de la saison 2019-2020, Nelson Goerner donnera des récitals sur certaines des scènes les plus importantes du monde, dont le Théâtre des Champs-Elysées de Paris, le Wigmore Hall de Londres, le BOZAR de Bruxelles et le Cloitre des Jacobins de Toulouse, et donnera des concerts avec l’Orchestre Symphonique de La Monnaie et Alain Altinoglu, l’Orchestre Philharmonique de Radio France et Myung-Whun Chung, et le Luzerner Sinfonieorchester sous la direction de Lawrence Foster.<br/> Nelson Goerner a joué avec de nombreux grands orchestres d’aujourd’hui, dont le Philharmonia Orchestra, l’Orchestre de Paris, le London Philharmonic Orchestra, la Deutsche Kammerphilharmonie, le Hallé Orchestra, le Sinfonia Varsovia et le NHK Symphony Orchestra, ainsi qu’avec plusieurs des plus grands chefs d’orchestre actuels tels que Vladimir Ashkenazy, Philippe Herreweghe , Neeme Järvi, Sir Mark Elder, Paavo Järvi, Vassily Sinaisky, Jonathan Nott, Fabio Luisi et Esa-Pekka Salonen. Ses apparitions dans les festivals comprennent les engagements les plus prestigieux d’aujourd’hui, dont le Festival de Salzbourg, La Roque d’Anthéron, La Grange de Meslay, le Festival international d’Édimbourg, le Festival de Verbier, La Folle Journée (Nantes et Tokyo), le Schleswig-Holstein, le ‘Chopin de Varsovie et son Europe’ et les BBC Proms.Chambriste passionné, Nelson Goerner a collaboré avec des artistes tels que Martha Argerich (au répertoire pour deux pianos), Janine Jansen, Steven Isserlis et Gary Hoffman. La saison 2019-20 comprendra une série de récitals en duo avec Sol Gabetta en Italie et Renaud Capuçon en Suisse.Nelson Goerner entretient des relations étroites avec le Mozarteum Argentino de Buenos Aires et jouit d’une longue association avec l’Institut Chopin de Varsovie, dont il est membre du comité consultatif artistique. Il a sorti plusieurs albums au répertoire atypique sur la propre maison de disques de l’Institut, le dernier en date, en 2019, avec des œuvres de Godowski et Paderewski, dont les monumentales Variations et Fugue op.23. Son enregistrement des Ballades et Nocturnes de Chopin a été récompensé par un Diapason d’Or.<br/> Nelson Goerner enregistre principalement pour Alpha Classics et sa discographie pour eux comprend des œuvres de Chopin, Beethoven, Brahms, Debussy, Schumann, Fauré et Franck. De nombreux albums de Goerner ont été nommés enregistrements « de référence ». Les récompenses incluent : Diapason d’Or de l’année pour son enregistrement de Debussy ; Enregistrement du mois par BBC Music Magazine pour son album d’œuvres de Schumann ; Choc de Classica et Diapason d’Or pour son album Chopin Preludes ; ainsi que des éloges retentissants de la critique pour son enregistrement de la Sonate Hammerklavier Op 106 de Beethoven.<br/> Nelson Goerner est né à San Pedro, en Argentine, en 1969. Après avoir étudié en Argentine avec Jorge Garrubba, Juan Carlos Arabian et Carmen Scalcione, il obtient le Premier Prix du Concours Franz Liszt de Buenos Aires en 1986. Cela a conduit à une bourse pour travailler avec Maria Tipo au Conservatoire de Genève et, en 1990, Nelson Goerner a remporté le Premier Prix au Concours de Genève.<br/> Nelson Goerner vit en Suisse avec sa femme et son fils. Il soutient fièrement et activement l’organisation humanitaire Ammala.",
                    roles : [
                        {
                            id: 1,
                            title: "Professeur"
                        }
                    ],
                    instruments: [
                        {
                            id: 1,
                            title: "Piano"
                        }
                    ]
                },
                formations: [
                    {
                        id: 1,
                        title: "Formation 1"
                    }
                ]

            },
            {
                informations : {
                    id: 5,
                    firstName: "Nelson",
                    lastName: "Goerner",
                    imageLink: "/assets/images/1000x1500-pour-site14.png",
                    description: "Nelson Goerner est l’un des plus grands pianistes classiques d’aujourd’hui. Il est salué pour ses performances de l’art et de la poésie les plus élevés, tout en possédant une conviction exaltante et magistrale.<br/> Au cours de la saison 2019-2020, Nelson Goerner donnera des récitals sur certaines des scènes les plus importantes du monde, dont le Théâtre des Champs-Elysées de Paris, le Wigmore Hall de Londres, le BOZAR de Bruxelles et le Cloitre des Jacobins de Toulouse, et donnera des concerts avec l’Orchestre Symphonique de La Monnaie et Alain Altinoglu, l’Orchestre Philharmonique de Radio France et Myung-Whun Chung, et le Luzerner Sinfonieorchester sous la direction de Lawrence Foster.<br/> Nelson Goerner a joué avec de nombreux grands orchestres d’aujourd’hui, dont le Philharmonia Orchestra, l’Orchestre de Paris, le London Philharmonic Orchestra, la Deutsche Kammerphilharmonie, le Hallé Orchestra, le Sinfonia Varsovia et le NHK Symphony Orchestra, ainsi qu’avec plusieurs des plus grands chefs d’orchestre actuels tels que Vladimir Ashkenazy, Philippe Herreweghe , Neeme Järvi, Sir Mark Elder, Paavo Järvi, Vassily Sinaisky, Jonathan Nott, Fabio Luisi et Esa-Pekka Salonen. Ses apparitions dans les festivals comprennent les engagements les plus prestigieux d’aujourd’hui, dont le Festival de Salzbourg, La Roque d’Anthéron, La Grange de Meslay, le Festival international d’Édimbourg, le Festival de Verbier, La Folle Journée (Nantes et Tokyo), le Schleswig-Holstein, le ‘Chopin de Varsovie et son Europe’ et les BBC Proms.Chambriste passionné, Nelson Goerner a collaboré avec des artistes tels que Martha Argerich (au répertoire pour deux pianos), Janine Jansen, Steven Isserlis et Gary Hoffman. La saison 2019-20 comprendra une série de récitals en duo avec Sol Gabetta en Italie et Renaud Capuçon en Suisse.Nelson Goerner entretient des relations étroites avec le Mozarteum Argentino de Buenos Aires et jouit d’une longue association avec l’Institut Chopin de Varsovie, dont il est membre du comité consultatif artistique. Il a sorti plusieurs albums au répertoire atypique sur la propre maison de disques de l’Institut, le dernier en date, en 2019, avec des œuvres de Godowski et Paderewski, dont les monumentales Variations et Fugue op.23. Son enregistrement des Ballades et Nocturnes de Chopin a été récompensé par un Diapason d’Or.<br/> Nelson Goerner enregistre principalement pour Alpha Classics et sa discographie pour eux comprend des œuvres de Chopin, Beethoven, Brahms, Debussy, Schumann, Fauré et Franck. De nombreux albums de Goerner ont été nommés enregistrements « de référence ». Les récompenses incluent : Diapason d’Or de l’année pour son enregistrement de Debussy ; Enregistrement du mois par BBC Music Magazine pour son album d’œuvres de Schumann ; Choc de Classica et Diapason d’Or pour son album Chopin Preludes ; ainsi que des éloges retentissants de la critique pour son enregistrement de la Sonate Hammerklavier Op 106 de Beethoven.<br/> Nelson Goerner est né à San Pedro, en Argentine, en 1969. Après avoir étudié en Argentine avec Jorge Garrubba, Juan Carlos Arabian et Carmen Scalcione, il obtient le Premier Prix du Concours Franz Liszt de Buenos Aires en 1986. Cela a conduit à une bourse pour travailler avec Maria Tipo au Conservatoire de Genève et, en 1990, Nelson Goerner a remporté le Premier Prix au Concours de Genève.<br/> Nelson Goerner vit en Suisse avec sa femme et son fils. Il soutient fièrement et activement l’organisation humanitaire Ammala.",
                    roles : [
                        {
                            id: 1,
                            title: "Professeur"
                        }
                    ],
                    instruments: [
                        {
                            id: 1,
                            title: "Piano"
                        }
                    ]
                },
                formations: [
                    {
                        id: 1,
                        title: "Formation 1"
                    }
                ]

            }
        ];

        // @ts-ignore
        setProfessors(data);
        setLoader(true);
    };

    useEffect(() => {
        getProfessors()
    }, [])

    return (
        <>
            {loader ? (
                <>
                    <Header search={true}/>
                    <main className={"max_width_container margin-top-20"}>
                        <h1>Liste des professeurs</h1>
                        <div className={"main_section_container-flex-row margin-top-20 max_width"}>
                            {professors.map((professor, i) => {
                                return (
                                    <NavLink to={professor.informations.id.toString()} className={"professor_card_container"}>
                                        <div  className={"professors_card"}>
                                            <img src={professor.informations.imageLink}/>
                                        </div>
                                        <div>
                                            <p>{professor.informations.firstName} {professor.informations.lastName}</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </main>
                    <Footer/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    )
}

