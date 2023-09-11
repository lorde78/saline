import "~/styles/graduations.css";

type Props = {
    graduationData: any[];
};

export default function Graduation({ graduationData }: Props) {

  return (
    <div className="graduations">
      <div className="graduations_container">

        {graduationData.map((graduation, i) => {
          return (
            <div key={i} className="graduation">
              <figure className="graduation-pic">
                <img
                  src={graduation.thumbnail}
                  alt={graduation.title}
                />
              </figure>
              <div className="graduation_text">
                <p className="graduation_title">{graduation.title}</p>
                <p className="graduation_professor">{graduation.professor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
