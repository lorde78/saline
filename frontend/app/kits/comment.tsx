// import { useState } from "react";
import "~/styles/comment.css";
import Response from "./response";

type Props = {
  username: string;
  content: string;
  userpic: string;
  date: string;
  upvote: number;
  downvote: number;
  responsesData: any;
};




export default function Comment ({ username, content, userpic, date, upvote, downvote, responsesData }: Props) {

  // const [responseContent, setResponseContent] = useState("");

  // const handleResponseSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setResponseContent("");
  // };

  

  return (
      <div className="comment_container">

        <figure className="comment_profile-pic">
            <img src={userpic} alt="photo de profile" />
        </figure>

        <div className="comment_main">

          <div className="comment-header">

              <div className="comment_username">{username}</div>
              <div className="comment_date">{date}</div>
              <div className={`comment_admin-actions`}>
                  <i className="ri-more-fill"></i>
              </div>
          </div>

          <div className="comment_content">{content}</div>

          <div className="comment-footer">
              <div className="comment_vote-container">
                  <i className="ri-arrow-up-s-line"></i>
                  <div>{upvote}</div>
                  </div>
              <div className="comment_vote-container">
                  <i className="ri-arrow-down-s-line"></i>
                  <div>{downvote}</div>
                  </div>
              <div className="comment_response_button" role="button">Répondre</div>
          </div>


          <div className="comment_responses">
            {responsesData && responsesData.map((response, i) => {
              return (<Response 
                key={i}
                username={response.username}
                content={response.content}
                userpic={response.userpic}
                date={response.date}
                upvote={response.upvote}
                downvote={response.downvote}
                />)
            })}
          </div>
        </div>



      </div>

  );
};
