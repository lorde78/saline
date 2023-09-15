import React, {useState} from "react";
import "~/styles/professorInfos.css";
import Tag from "./tag";

type Props = {
    profilePicture: string;
    jobs: any;
    instruments: any;
    awards: any;
  };

interface Job {
    title: string
}

interface Instrument {
    title: string
}

interface Award {
    text: string
}

export default function ProfessorInfos({ profilePicture, jobs, instruments, awards }: Props) {

    return (
        <div>
            <div className="professor-infos_container">
                <figure className="profile-pic">
                    <img src={profilePicture} alt="photo de profile" />
                </figure>

                <div className="professor-role">
                    <p>Rôle:</p>
                    {jobs.map((job:Job, i:number) => {
                        return (
                            <Tag role={job.title} key={i}/>
                        )
                    })}
                </div>

                <div className="professor-instrument">
                    <p>Instrument:</p>
                    {instruments.map((instrument:Instrument, i:number) => {
                        return (
                            <Tag role={instrument.title} key={i}/>
                        )
                    })}
                </div>
            </div>

            <div className="professor-reward">
                {awards.map((award:Award, i:number) => {
                    return (
                        <>
                            <i className="ri-award-line"></i>
                            <p>{award.text}</p>
                        </>
                    )
                })}
            </div>
        </div>
    );
};
