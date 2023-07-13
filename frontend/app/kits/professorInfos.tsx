import React, {useState} from "react";
import "~/styles/professorInfos.css";
import Tag from "./tag";

type ProfessorInfosProps = {
    src: string;
  };
  
  const ProfessorInfos: React.FC<ProfessorInfosProps> = ({ src }) => {


    return (
        <div>
            <div className="professor-infos_container">
                <figure className="profile-pic">
                    <img src={src} alt="photo de profile" />
                </figure>

                <div className="professor-role">
                    <p>Rôle:</p>
                    <Tag role="Professeur"/>
                </div>

                <div className="professor-instrument">
                    <p>Instrument:</p>
                    <Tag role="Piano"/>
                </div>
            </div>
            <div className="professor-reward">
                <i className="ri-award-line"></i>
                <p>En 1990, il gagne le Premier Prix de la "Genva Competition".</p>
            </div>
        </div>
    );
  };
  
  export default ProfessorInfos;
  