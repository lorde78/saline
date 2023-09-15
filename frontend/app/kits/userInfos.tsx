import React, {useState} from "react";
import "~/styles/userInfos.css";
import Tag from "./tag";
import PopupProfile from "./popupProfile";
import moment from 'moment';

type Props = {
    data: any;
};

export default function UserInfos({data}: Props) {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const parsedDate = moment(data.birthDate).format('DD/MM/YYYY');

    return (
        <div className="user-infos_container">
            <figure className="profile-pic">
                <img src={data.profilePicture} alt="photo de profile"/>
            </figure>
            <div className="user-infos">
                <div className="top">
                    <div>
                        <Tag roles={data.roles}/>
                        <i className="settings-icon ri-settings-2-line" onClick={togglePopup}></i>
                        {showPopup && <PopupProfile/>}
                    </div>
                    <div>
                        <p className="name">{data.firstName} {data.name}</p>
                        <p className="birthdate">{parsedDate}</p>
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
