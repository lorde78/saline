import React, {useState} from "react";
import "~/style/userInfos.css";
import Tag from "./tag";
import PopupProfil from "./popupProfil";

type Props = {
    src: string;
  };
  
  export default function UserInfos ({ src }: Props) {

    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
    return (
      <div className="user-infos_container">
        <figure className="profil-pic">
            <img src={src} alt="photo de profil" />
        </figure>
        <div className="user-infos">
            <div className="top">
                <div>
                    <Tag role="étudiant"/>
                    <i className="settings-icon ri-settings-2-line" onClick={togglePopup}></i>
                    {showPopup && <PopupProfil />}
                </div>
                <div>
                    <p className="name">John Doe</p>
                    <p className="birthdate">12/05/1999</p>
                </div>
            </div>
            <div className="lessons-progress_container">
                <p>Formations</p>
                <div className="lessons-progress">
                    <div className="lessons-in-progress">
                        <p>En cours</p>
                        <p>2</p>
                    </div>
                    <div className="lessons_done">
                        <p>Achevées</p>
                        <p>2</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
