import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import UserInfos from "~/kits/userInfos";
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import profilStyles from "~/styles/profilStyle.css";
import EditUserProfile from "~/components/editUserProfil";
import Form_login from "~/components/form_login";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";
import inputStyles from "~/styles/input.css";


const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  gender: 'Femme',
  dateOfBirth: '1990-07-05',
  address: '28 rue Albert, Mars',
};


export function links() {
  return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: profilStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}]
}

export default function Profil_page() {
    return (
        <div className="profil-page">
          {/* <UserInfos src="/assets/images/pdp.png"/>
          <Formule subscription="Annuel" />
          <Accordion title="Vos formations" content="Content 1" picto="ri-book-mark-line" />
          <Accordion title="Vos commentaires" content="Content 2" picto="ri-message-3-line" />
          <Accordion title="Vos certifications" content="Content 3" picto="ri-graduation-cap-line" /> */}
          <EditUserProfile userInfo={userInfo} />
          {/* <Form_register_complementary /> */}
        </div>
    )
}