import "~/styles/cardFormule.css";

type CardFormuleProps = {
  sub: string;
  price: number;
};

const CardFormule: React.FC<CardFormuleProps> = ({ sub, price, }) => {
  
  return (
    <div>
        <div className='card_formule'>
            <p className="subscription-title">{sub}</p>
            <p className="subscription-price">{price}€/Mois</p>
            <div className="subscription-advantage">
              <p>Accès illimité à toutes nos masterclasses.</p>
              <p>De nouvelles vidéos sont disponibles chaque mois.</p>
              <p>Des interviews exclusives avec les plus grands professeurs du monde.</p>
              <p>Partitions annotées par nos professeurs et prêtes à être téléchargées.</p>
              <p>Vidéos multi-angles disponibles en HD sur tous vos appareils.</p>
            </div>
        </div>

    </div>
  );
};

export default CardFormule;
