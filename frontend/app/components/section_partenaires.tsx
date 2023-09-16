import React from "react";
import '../styles/section_partenaires.css'

interface Partenaires {
    icon: string;
}

export const SectionPartenaires: React.FC = () => {
    const partenaires: Partenaires[] = [
        {
            icon: "/assets/images/AIEN-removebg-preview.png"
        },
        {
            icon: "/assets/images/Colburn-logo-white-1.png"
        },
        {
            icon: "/assets/images/thumbnail_RCM-Primary-Logo-White-CMYK.png"

        },
        {
            icon: "/assets/images/RIAM-logo-white.png"
        },
    ];

    return (
        <div className="section_partenaires_container">
            <h2>Les partenaires de la Saline royale Academy</h2>
            <ul className="section_partenaires_list">
                {partenaires.map((partenaire, index) => (
                    <li className="section_partenaires_item" key={index}>
                        <img src={partenaire.icon} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
