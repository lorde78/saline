import "~/styles/headerNav.css";


type HeaderNavProps = {
  text: string;
};

const HeaderNav: React.FC<HeaderNavProps> = ({ text }) => {
  

  return (
    <div>
        <i className="ri-arrow-left-s-line arrow-return"></i>
        <h1>{text}</h1>
    </div>
  );
};

export default HeaderNav;
