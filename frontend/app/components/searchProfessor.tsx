import React, {useState} from "react";
import "~/styles/searchProfessor.css";
// import Tag from "./tag";

type SearchProfessorProps = {
  };
  
  const SearchProfessor: React.FC<SearchProfessorProps> = ({  }) => {


    return (
        <div>
            <div className="result_professor_container">
                <figure className="result_professor-pic">
                    <img src='/assets/images/1000x1500-pour-site14.png' alt="photo de profil" />
                </figure>
                <figure className="result_professor-pic">
                    <img src='/assets/images/1000x1500-pour-site14.png' alt="photo de profil" />
                </figure>
                <figure className="result_professor-pic">
                    <img src='/assets/images/1000x1500-pour-site14.png' alt="photo de profil" />
                </figure>
                <figure className="result_professor-pic">
                    <img src='/assets/images/1000x1500-pour-site14.png' alt="photo de profil" />
                </figure>
                <figure className="result_professor-pic">
                    <img src='/assets/images/1000x1500-pour-site14.png' alt="photo de profil" />
                </figure>
            </div>
        </div>
    );
  };
  
  export default SearchProfessor;
  