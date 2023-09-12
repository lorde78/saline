import React  from 'react';
import HeaderNav from "~/kits/headerNav";
import Input from '~/kits/input';
import "~/styles/editPassword.css";

type EditPasswordProps = {

};

export default function EditPassword() {
  
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

