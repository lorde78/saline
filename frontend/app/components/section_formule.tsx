import * as React from "react";
import "swiper/swiper-bundle.min.css";
import '../styles/section_formule.css';
import '../styles/style.css';

interface Offre {
    title: string;
    price: string;
    reduction: string;
    avantage_1: string;
    avantage_2: string;
    avantage_3: string;
    avantage_4: string;
    avantage_5: string;
    payment: string;
}

interface SliderProps {
    offres: Offre[];
}

export const Offre: React.FunctionComponent<SliderProps> = ({
}) => {
    const [Swiper, setSwiper] = React.useState<any>(null);
    const offres: Offre[] = [
        {
            title: "Annuel",
            price: "9.9€/Mois",
            reduction: "Au lieu de 19.8€",
            payment: "Paiement annuel de 118.8€",
            avantage_1: "Accès illimité à toutes nos masterclasses.",
            avantage_2: "De nouvelles vidéos sont disponibles chaque mois.",
            avantage_3: "Des interviews exclusives avec les plus grands professeurs du monde.",
            avantage_4: "Partitions annotées par nos professeurs et prêtes à être téléchargées.",
            avantage_5: "Vidéos multi-angles disponibles en HD sur tous vos appareils.",
        },
        {
            title: "Annuel",
            price: "9.9€/Mois",
            reduction: "blabla",
            payment: "blabla",
            avantage_1: "blabla",
            avantage_2: "blabla",
            avantage_3: "blabla",
            avantage_4: "blabla",
            avantage_5: "blabla",
        },
        {
            title: "Annuel",
            price: "9.9€/Mois",
            reduction: "blabla",
            payment: "blabla",
            avantage_1: "blabla",
            avantage_2: "blabla",
            avantage_3: "blabla",
            avantage_4: "blabla",
            avantage_5: "blabla",
        },
    ];

    React.useEffect(() => {
        import("swiper/react").then((module) => {
            setSwiper(module);
        });
    }, []);

    if (!Swiper) {
        return null;
    }

    const { Swiper: SwiperComponent, SwiperSlide } = Swiper;

    const defaultOffre: Offre[] = [];

    const allOffre = offres.length > 0 ? offres : defaultOffre;

    return (
        <div className="section_formule_container">
            <h2>Choississez votre offre</h2>
            <SwiperComponent
                slidesPerView={1}
            >
                {allOffre.map((offre, index) => (
                    <SwiperSlide key={index}>
                        <div className="section_formule_item">
                            <h3>{offre.title}</h3>
                            <div className="section_formule_item_information">
                                <span>{offre.price}</span>
                                <span>{offre.reduction}</span>
                                <span>{offre.payment}</span>
                            </div>
                            <ul className="section_formule_item_avantage">
                                <li><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white"/>
</svg>{offre.avantage_1}</li>
                                <li><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white"/>
</svg>{offre.avantage_2}</li>
                                <li><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white"/>
</svg>{offre.avantage_3}</li>
                                <li><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white"/>
</svg>{offre.avantage_4}</li>
                                <li><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white"/>
</svg>{offre.avantage_5}</li>
                            </ul>
                            <a href="" className="button">Souscrire</a>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    );
};