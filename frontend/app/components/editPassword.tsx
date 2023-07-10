import React  from 'react';
import HeaderNav from "~/kits/headerNav";
import Input from '~/kits/input';
import "~/styles/editPassword.css";

type EditPasswordProps = {

};

const EditPassword: React.FC<EditPasswordProps> = ({  }) => {
  
  return (
    <div>
      <HeaderNav namePage="Modifier mon mot de passe"/>
      <div className='edit_password'>
        <Input type='password' name='newPassword' placeholder='Nouveau mot de passe' />
        <Input type='password' name='confirmPassword' placeholder='Confirmation' />
      </div>
    </div>
  );
};

export default EditPassword;
