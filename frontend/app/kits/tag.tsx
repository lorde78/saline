import React from "react";
import "~/style/tag.css";

type Props = {
    role: string;
  };
  
  export default function Tag ({ role }: Props) {
  
    return (
      
        <div className="tag">
            <p className="role">{role}</p>
        </div>
    );
  };
  