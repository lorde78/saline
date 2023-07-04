import React, { useState, ChangeEvent, FormEvent } from 'react';
import "~/styles/editProfil.css";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  address: string;
};

type EditUserProfileProps = {
  userInfo: UserInfo;
};

const EditUserProfile: React.FC<EditUserProfileProps> = ({ userInfo }) => {
  const [formData, setFormData] = useState<UserInfo>(userInfo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique pour envoyer les données modifiées au serveur
    console.log(formData);
  };

  return (
    <div>
      <form className="edit-profile_form" onSubmit={handleSubmit}>
        
        <p className="form_section">Infos personnel</p>
 
        <input
          className="input_content"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        <input
          className="input_content"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          />
        
        <input
          className="input_content"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />

        <select 
          className="input_content input_select"
          name="gender"
          onChange={handleChange}
          defaultValue={formData.gender}
        >
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Autre">Autre</option>
        </select>
        
        <input
          className="input_content"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        
        <p className="form_section">Adresse</p>
        <input
          className="input_content"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        
        <button className='button' type="submit">Valider</button>
      </form>
    </div>
  );
};

export default EditUserProfile;
