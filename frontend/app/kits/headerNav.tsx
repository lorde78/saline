import "~/styles/headerNav.css";


type HeaderNavProps = {
  namePage: string;
};

const HeaderNav: React.FC<HeaderNavProps> = ({ namePage }) => {
  

  return (
    <div className="header-nav">
        <i className={`ri-arrow-left-s-line arrow-return`}></i>
        <h1 className="name_page">{namePage}</h1>
    </div>
  );
};

export default HeaderNav;
