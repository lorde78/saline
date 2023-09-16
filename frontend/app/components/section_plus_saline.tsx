import React from "react";
import '../styles/section_plus_saline.css'

interface SalinePlus {
    icon: string;
    text: string;
}

export const SectionSalinePlus: React.FC = () => {
    const salines: SalinePlus[] = [
        {
            icon: "/assets/images/icones/livre.png",
            text: "Accédez au plus grand et au plus prestigieux catalogue de masterclass de musique classique en ligne."
        },
        {
            icon: "/assets/images/icones/coupe.png",
            text: "Apprenez auprès des meilleurs professeurs, lauréats de concours et membres de jury."
        },
        {
            icon: "/assets/images/icones/tele.png",
            text: "De nouvelles vidéos sont disponibles chaque mois."
        },
        {
            icon: "/assets/images/icones/music.png",
            text: "Vidéos multi-angles, partitions annotées avec les recommandations des professeurs, analyses de œuvres et plus encore..."
        },
    ];

    return (
        <div className="section_plus_saline_container">
            <ul className="section_plus_saline_list">
                {salines.map((saline, index) => (
                    <li className="section_plus_saline_item" key={index}>
                        <div className="icon-container">
                            <img src={saline.icon} alt="" />
                        </div>
                        <p>{saline.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
