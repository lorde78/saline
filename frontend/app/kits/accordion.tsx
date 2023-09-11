import React, {useState} from "react";
import Comments from "~/components/comments";
import "~/styles/accordion.css";
import Formation from "./formations";
import Graduation from "./graduations";

type Props = {
  type: string;
  title: string;
  picto: string;
};

const fakeCommentData = [
  {
    username: "John Doe",
    content: "Comment on fait pour faire ça ? Merci beaucoup",
    userpic: "/assets/images/1000x1500-pour-site14.png",
    date: "21/08",
    upvote: 6,
    downvote: 7,
    responsesData: [
      {
        username: "Alice",
        content: "C'est assez simple, voici comment faire : ...",
        userpic: "/assets/images/1000x1500-pour-site14.png",
        date: "22/08",
        upvote: 12,
        downvote: 3,
      },
      {
        username: "Bob",
        content: "Je suis d'accord avec Alice, voici une autre méthode : ...",
        userpic: "/assets/images/1000x1500-pour-site14.png",
        date: "22/08",
        upvote: 8,
        downvote: 2,
      },
    ],
  },
  {
    username: "Eva",
    content: "Super commentaire !",
    userpic: "/assets/images/1000x1500-pour-site14.png",
    date: "23/08",
    upvote: 4,
    downvote: 1,
  },
];

const fakeFormationsData = [
  {
    title: "C'est le titre",
    thumbnail: "/assets/images/1000x1500-pour-site14.png",
    progress: 100,
    status: "achieved"
    
  },
  {
    title: "Super commentaire !",
    thumbnail: "/assets/images/1000x1500-pour-site14.png",
    progress: 23,
    status: "in progress"
  },
];

const fakeGraduationsData = [
  {
    title: "Cours 1",
    thumbnail: "/assets/images/1000x1500-pour-site14.png",
    professor: "Professor",
    
  },
  {
    title: "Cours 2",
    thumbnail: "/assets/images/1000x1500-pour-site14.png",
    professor: "Professor",
  },
];

export default function Accordion({type, title, picto}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderAccordionContent = () => {

    switch (type) {
      case "comments":

        return <Comments commentsData={fakeCommentData} />
      
      case "formations":
          return <Formation formationData={fakeFormationsData}/>

      case "graduations":
          return <Graduation graduationData={fakeGraduationsData}/>
          
      default:
          break
  }

}

  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="accordion">
      <div 
      className="accordion-container"
      onClick={toggleAccordion} 
      role="button">

        <i className={`accordion-icon ${picto}`}></i>

        

        <div className="accordion-title">{title}</div>

        <i className={`accordion-arrow ri-arrow-right-s-line ${isOpen ? "rotate-arrow" : ""}`}></i>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "accordion-open" : ""}`}
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        {renderAccordionContent()}
      </div>
    </div>
  );
};
