import React from "react";
import "~/styles/popupProfil.css";

type PopupProfilProps = {
  };
  
  const PopupProfil: React.FC<PopupProfilProps> = ({  }) => {
    
  
    return (
      <div className="popup-profil_container">
        <p>Modifier mon profil</p>
        <p>Changer mon mot de passe</p>
        <p>Changer mon abonnement</p>
        <p className="delete-button">Supprimer mon compte</p>
      </div>
    );
  };
  
  export default PopupProfil;
  