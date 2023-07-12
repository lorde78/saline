import React from "react";
import "~/styles/tag.css";

type TagProps = {
    role: string;
  };
  
  const Tag: React.FC<TagProps> = ({ role }) => {
  
    return (
      
        <div className="tag">
            <p className="role">{role}</p>
        </div>
    );
  };
  
  export default Tag;
  