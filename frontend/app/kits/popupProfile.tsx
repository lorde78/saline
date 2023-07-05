import React from "react";
import "~/styles/popupProfile.css";

type PopupProfileProps = {
  };
  
  const PopupProfile: React.FC<PopupProfileProps> = ({  }) => {
    
  
    return (
      <div className="popup-profile_container">
        <p>Modifier mon profil</p>
        <p>Changer mon mot de passe</p>
        <p>Changer mon abonnement</p>
        <p className="delete-button">Supprimer mon compte</p>
      </div>
    );
  };
  
  export default PopupProfile;
  