import "~/styles/searchProfessor.css";

type Props = {
    professorData: any[],
}


export default function SearchProfessor({professorData}: Props) {


    return (
        <div>
            <div className="result_professor_container">
                {professorData.map((professor, i) => {
                return (
                    <figure className="result_professor-pic">
                        <img src={professor.profilepic} alt="photo de profil" />
                    </figure>
                )})}
                
            </div>
        </div>
    );
  };

  