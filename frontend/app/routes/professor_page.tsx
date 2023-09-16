import 'remixicon/fonts/remixicon.css'
import Accordion from "~/kits/accordion";
import Formule from "~/kits/formule";
import UserInfos from "~/kits/userInfos";
import resetStyles from "~/styles/reset.css";
import globalStyles from "~/styles/style.css";
import professorStyles from "~/styles/professorPage.css";
import EditUserProfile from "~/components/editUserProfile";
import Form_login from "~/components/form_login";
import Form_register from "~/components/form_register";
import Form_register_complementary from "~/components/form_register_complementary";
import inputStyles from "~/styles/input.css";
import EditPassword from "~/components/editPassword";
import EditFormule from '~/components/editFormule';
import formuleStyles from "~/styles/formule.css";
import ProfessorInfos from '~/kits/professorInfos';
import Professor_profile from '~/components/professorProfile';
import SearchProfessor from '~/components/searchProfessor';
import {isLogged} from "~/helper/isLogged";


const fakeProfessorsData = [
    {
      id: 1,
      profilepic: "/assets/images/1000x1500-pour-site14.png",
      
    },
    {
      id: 2,
      profilepic: "/assets/images/1000x1500-pour-site14.png",
    },
    {
      id: 3,
      profilepic: "/assets/images/1000x1500-pour-site14.png",
    },
    {
      id: 4,
      profilepic: "/assets/images/1000x1500-pour-site14.png",
    },
  ];


export function links() {
  return [{rel: 'stylesheet', href: resetStyles}, {rel: 'stylesheet', href: professorStyles}, {rel: 'stylesheet', href: globalStyles}, {rel: 'stylesheet', href: inputStyles}, {rel: 'stylesheet', href: formuleStyles}]
}

export default function Professor_page() {
    isLogged("user");
    return (
        <div className="professor-profile">
            {/* <Professor_profile /> */}
            <SearchProfessor professorData={fakeProfessorsData}/>
        </div>
    )
}