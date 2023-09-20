import React, {useState} from "react";
import Comments from "~/components/comments";
import "~/styles/accordion.css";
import Formation from "./formations";
import Graduation from "./graduations";
import LessonsFromProf from "~/kits/lessonsFromProf";

type Props = {
  type: string;
  title: string;
  picto: string;
  data?: any;
};

const fakeCommentData = [
  {
    username: "John Doe",
    content: "Comment on fait pour faire ça ? Merci beaucoup",
    userpic: "/assets/images/pdp.png",
    date: "21/08",
    upvote: 6,
    downvote: 7,
    responsesData: [
      {
        username: "Alice",
        content: "C'est assez simple, voici comment faire : ...",
        userpic: "/assets/images/pdp.png",
        date: "22/08",
        upvote: 12,
        downvote: 3,
      },
      {
        username: "Bob",
        content: "Je suis d'accord avec Alice, voici une autre méthode : ...",
        userpic: "/assets/images/pdp.png",
        date: "22/08",
        upvote: 8,
        downvote: 2,
      },
    ],
  },
  {
    username: "Eva",
    content: "Super commentaire !",
    userpic: "/assets/images/pdp.png",
    date: "23/08",
    upvote: 4,
    downvote: 1,
  },
];

const fakeFormationsData = [
  {
    title: "C'est le titre",
    thumbnail: "/assets/images/square.jpg",
    progress: 100,
    status: "terminée"
    
  },
  {
    title: "Cours 1",
    thumbnail: "/assets/images/square.jpg",
    progress: 23,
    status: "en cours"
  },
  {
    title: "Cours 1",
    thumbnail: "/assets/images/square.jpg",
    progress: 23,
    status: "en cours"
  },
];

const fakeGraduationsData = [
  {
    title: "Cours 1",
    thumbnail: "/assets/images/rect.jpg",
    professor: "Professeur",
    
  },
  {
    title: "Cours 2",
    thumbnail: "/assets/images/rect.jpg",
    professor: "Professeur",
  },
];

export default function Accordion({type, title, picto, data}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderAccordionContent = () => {

    switch (type) {
      case "comments":
        return <Comments commentsData={fakeCommentData} needResponses={false}/>
      
      case "formations":
        return <Formation formationData={fakeFormationsData}/>

      case "graduations":
        return <Graduation graduationData={fakeGraduationsData}/>

      case "lessons":
        return <LessonsFromProf lessonData={data}/>;

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
