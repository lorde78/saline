import React  from 'react';
import FormuleTag from '~/kits/formuleTag';
import HeaderNav from "~/kits/headerNav";
import CardFormule from '~/kits/cardFormule';
import "~/styles/editFormule.css";


export default function EditFormule() {
  
  return (
    <div>
        <HeaderNav namePage="Modifier mon abonnement"/>
        <div className='edit_formule'>
          <div>
            <FormuleTag subscription='Annuel'/>
            <div className='price-formule'>
              <p className="formule_price_value">9.9€/Mois</p>
              <p className="formule_price_total">Paiement annuel de 118.8€</p>
            </div>
          </div>
          <button className='unsub-button'>Résilier</button>
        </div>

        <div className="all-formule">
            <h2>Tous les abonnements</h2>
            <CardFormule sub='Mensuel' price={19.8} buttonName='Modifier'/>
        </div>


    </div>
  );
};