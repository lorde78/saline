import React, { useState } from "react";
import "~/styles/formations.css";

type Props = {
  formationData: any[];
};

export default function Formation({ formationData }: Props) {
  const [activeStatus, setActiveStatus] = useState("en cours");

  // Filter the data based on the activeStatus
  const filteredFormations =
    activeStatus === "en cours"
      ? formationData.filter((formation) => formation.status === "en cours")
      : formationData.filter((formation) => formation.status === "terminée");

  return (
    <div className="formations">
      <div className="formations_status">
        <button
          className={activeStatus === "en cours" ? "active" : ""}
          onClick={() => setActiveStatus("en cours")}
        >
          En cours
        </button>
        <button
          className={activeStatus === "terminée" ? "active" : ""}
          onClick={() => setActiveStatus("terminée")}
        >
          Achevées
        </button>
      </div>
      <div className="formations_container">

        {filteredFormations.map((formation, i) => {
          return (
            <div key={i} className="formation">
              <figure className="formation-pic">
                <img
                  src={formation.thumbnail}
                  alt={formation.title}
                />
              </figure>
              <p className="formation_title">{formation.title}</p>
              <p className="formation_progress">{formation.progress}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
