import React, {useState} from "react";
import "~/styles/accordion.css";

type AccordionProps = {
  title: string;
  content: string;
  picto: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, picto }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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
        {content}
      </div>
    </div>
  );
};

export default Accordion;
