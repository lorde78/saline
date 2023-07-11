import 'remixicon/fonts/remixicon.css'
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import UserInfos from "~/kits/userInfos";
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import profileStyles from "~/styles/profileStyle.css";
import EditUserProfile from "~/components/editUserProfile";
import Form_login from "~/components/form_login";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";
import inputStyles from "~/styles/input.css";
import EditPassword from "~/components/editPassword";
import EditFormule from '~/components/editFormule';
import formuleStyles from "~/styles/formule.css";
import ProfessorInfos from '~/kits/professorInfos';





export function links() {
  return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: profileStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Professor_page() {
    return (
        <div className="professor-page">
            <ProfessorInfos src='/assets/images/1000x1500-pour-site14.png'/>
            <Accordion title="Les formations" content="Content 1" picto="ri-book-mark-line" />
            <Accordion title="Les interviews" content="Content 2" picto="ri-book-mark-line" />
        </div>
    )
}