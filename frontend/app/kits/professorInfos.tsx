import React, {useState} from "react";
import "~/styles/professorInfos.css";
import Tag from "./tag";

type Props = {
    src: any;
  };
  
export default function ProfessorInfos({ data }: Props) {


return (
    <div>
        <div className="professor-infos_container">
            <figure className="profile-pic">
                <img src={data.imageLink} alt="photo de profile" />
            </figure>

            <div className="professor-role">
                <p>Rôle:</p>
                {data.roles.map ((role, i) => {
                    return (
                        <Tag role={role.title}/>
                    )
                })}
            </div>

            <div className="professor-instrument">
                <p>Instrument:</p>
                {data.instruments.map ((instrument, i) => {
                    return (
                        <Tag role={instrument.title}/>
                    )
                })}
            </div>
        </div>
        <div className="professor-reward">
            <i className="ri-award-line"></i>
            <p>En 1990, il gagne le Premier Prix de la "Genva Competition".</p>
        </div>
    </div>
);
};
