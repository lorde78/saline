import {NavLink} from "@remix-run/react";
import "~/styles/popupProfile.css";

  
export default function PopupProfile () {

  return (
    <div className="popup-profile_contain">
      <NavLink className='' to={"edit"}>
        <p>Modifier mon profil</p>
      </NavLink>

      <NavLink className='' to={"edit/password"}>
        <p>Changer mon mot de passe</p>
      </NavLink>

      <NavLink className='' to={"edit/formula"}>
        <p>Changer mon abonnement</p>
      </NavLink>
    </div>
  );
};

