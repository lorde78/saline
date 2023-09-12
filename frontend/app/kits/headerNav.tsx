import "~/styles/headerNav.css";


type Props = {
  namePage: string;
};

export default function HeaderNav({ namePage }: Props) {
  

  return (
    <div className="header-nav">
        <i className={`ri-arrow-left-s-line arrow-return`}></i>
        <h1 className="name_page">{namePage}</h1>
    </div>
  );
};

