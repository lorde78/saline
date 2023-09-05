import "~/styles/formations.css";

type Props = {
};

export default function Formation ({ }: Props) {

    

  return (
    <div className="formations">
        
      <div className="formation_container">
        <figure className="formation-pic">
            <img src="/assets/images/1000x1500-pour-site14.png" alt="" />
        </figure>
        <p className="formation_title">Cours 2</p>
        <p className="formation_progress">23%</p>
      </div>

    </div>
  );
};
