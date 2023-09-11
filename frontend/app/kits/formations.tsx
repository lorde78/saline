import React, { useState } from "react";
import "~/styles/formations.css";

type Props = {
  formationData: any[];
};

export default function Formation({ formationData }: Props) {
  const [activeStatus, setActiveStatus] = useState("in progress");

  // Filter the data based on the activeStatus
  const filteredFormations =
    activeStatus === "in progress"
      ? formationData.filter((formation) => formation.status === "in progress")
      : formationData.filter((formation) => formation.status === "achieved");

  return (
    <div className="formations">
      <div className="formations_status">
        <button
          className={activeStatus === "in progress" ? "active" : ""}
          onClick={() => setActiveStatus("in progress")}
        >
          En cours
        </button>
        <button
          className={activeStatus === "achieved" ? "active" : ""}
          onClick={() => setActiveStatus("achieved")}
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
