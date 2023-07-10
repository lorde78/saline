import FormuleTag from "./formuleTag";

type FormuleProps = {
  subscription: string;
};

const Formule: React.FC<FormuleProps> = ({ subscription }) => {

  return (
    <div className="formule">

      <div className="formule_infos">
        <p className="formule_title">Votre formule</p>
        <div className="formule_choice">
          
          <FormuleTag subscription={subscription} />
          <div className="formule_price">
            <p className="formule_price_value">9.9€/Mois</p>
            <p className="formule_price_total">Paiement annuel de 118.8€</p>
          </div>
        </div>
        
        <p className="formule_edit-sub">Modifier mon abonnement</p>
      </div>
      
      
    </div>
  );
};

export default Formule;
