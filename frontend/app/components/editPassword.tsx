import React, {useState} from 'react';
import HeaderNav from "~/kits/headerNav";
import Input from '~/kits/input';
import "~/styles/editPassword.css";
import editLink from "~/helper/editLink";
import {useNavigate} from "react-router-dom";
import useUpdateUser from "~/hook/useUpdateUser";

type EditPasswordProps = {};

type Props = {
    userInfo: any;
}

export default function EditPassword({userInfo}: Props) {
    const editPath = editLink(2)
    const navigate = useNavigate()

    const updateUser = useUpdateUser()

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formData = {
            "password": password
        }

        if (password === confirmPassword) {
            updateUser(formData, userInfo.id);

            navigate(editPath);
        }
    }

    return (
        <div>
            <form className="edit_password" onSubmit={handleSubmit}>
                <Input type='password' name='newPassword' placeholder='Nouveau mot de passe' propsSetValue={""}
                       setValue={setPassword} value={password}/>
                <Input type='password' name='confirmPassword' placeholder='Confirmation' propsSetValue={""}
                       setValue={setConfirmPassword} value={confirmPassword}/>
                <button className='button' type="submit">Valider</button>
            </form>
        </div>
    );
};

