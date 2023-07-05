import React  from 'react';
import FormuleTag from '~/kits/formuleTag';
import HeaderNav from "~/kits/headerNav";
import "~/styles/editFormule.css";

type EditFormuleProps = {

};

const EditFormule: React.FC<EditFormuleProps> = ({  }) => {
  
  return (
    <div>
        <HeaderNav namePage="Modifier mon abonnement"/>
        <div className='edit_formule'>
            <FormuleTag subscription='Annuel'/>
        </div>

        <div className="all-formule">
            <p>Tous les abonnements</p>
        </div>


    </div>
  );
};

export default EditFormule;
