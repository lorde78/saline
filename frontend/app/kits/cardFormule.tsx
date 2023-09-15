import "~/styles/cardFormule.css";

type Props = {
  sub: string;
  price: number;
  buttonName: string;
};

export default function CardFormule({ sub, price, buttonName}: Props) {
  
  return (
    <div>
        <div className='card_formule'>
            <p className="subscription-title">{sub}</p>
            <p className="subscription-price">{price}€/Mois</p>
            <div className="subscription-advantage">
                <div className="subscription-advantage-line">
                    <i className="ri-check-line icon-check"></i>
                    <p>Accès illimité à toutes nos masterclasses.</p>
                </div>
                <div className="subscription-advantage-line">
                    <i className="ri-check-line icon-check"></i>
                    <p>De nouvelles vidéos sont disponibles chaque mois.</p>
                </div>
                <div className="subscription-advantage-line">
                    <i className="ri-check-line icon-check"></i>
                    <p>Des interviews exclusives avec les plus grands professeurs du monde.</p>
                </div>
                <div className="subscription-advantage-line">
                    <i className="ri-check-line icon-check"></i>
                    <p>Partitions annotées par nos professeurs et prêtes à être téléchargées.</p>
                </div>
                <div className="subscription-advantage-line">
                    <i className="ri-check-line icon-check"></i>
                    <p>Vidéos multi-angles disponibles en HD sur tous vos appareils.</p>
                </div>
            </div>
            <button className="button">{buttonName}</button>
        </div>

    </div>
  );
};
