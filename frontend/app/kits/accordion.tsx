import React, {useState} from "react";
import Comments from "~/components/comments";
import "~/styles/accordion.css";

type Props = {
  type: string;
  title: string;
  picto: string;
};

export default function Accordion({type, title, picto}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderAccordionContent = () => {

    switch (type) {
      case "comment":

        return <Comments />
      
      case "squarepic":
          break
      case "rectanglepic":
          break
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
