import {NavLink} from "@remix-run/react";
import FormuleTag from "./formuleTag";

type Props = {
  subscription: string;
};

export default function Formule({ subscription }: Props) {

  return (
    <div className="formule">

      <div className="formule_infos">
        <p className="formule_title">Votre formule</p>

        <div className="formule_choice">
          <div className="formule_sub">
            <p>{subscription}</p>
          </div>
          <div className="formule_price">
            <p className="formule_price_value">9.9€/Mois</p>
            <p className="formule_price_total">Paiement annuel de 118.8€</p>
          </div>
        </div>
        
      <NavLink className='' to={"edit/formula"}>
        <p className="formule_edit-sub">Modifier mon abonnement</p>
      </NavLink>
      </div>
      
      
    </div>
  );
};
