import {NavLink} from "@remix-run/react";
import "~/styles/headerNav.css";


type Props = {
  namePage: string;
};

export default function HeaderNav({ namePage }: Props) {
  

  return (
    <div className="header-nav">
      <NavLink className='return-button' to={"/profile"}>
        <i className={`ri-arrow-left-s-line arrow-return`}></i>
      </NavLink>
        <h1 className="name_page">{namePage}</h1>
    </div>
  );
};

