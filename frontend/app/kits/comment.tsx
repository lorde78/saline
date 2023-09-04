import React from "react";
import "~/styles/comment.css";

type CommentProps = {
  username: string;
  content: string;
  userpic: string;
  responses: string;
  date: string;
  upvote: number;
  downvote: number;
  isAdmin: boolean;
};

const Comment: React.FC<CommentProps> = ({ username, content, userpic, responses, date, upvote, downvote, isAdmin }) => {

    

  return (
    <div className="comments">
      <div 
      className="comment_container"
      >

        <div className="comment-header">
            <figure className="comment_profile-pic">
                <img src={userpic} alt="photo de profile" />
            </figure>

            <div className="comment_username">{username}</div>
            <div className="comment_date">{date}</div>
            <div className={`comment_admin-actions ${isAdmin ? "show-actions" : ""}`}>
                <i className="ri-more-fill"></i>
            </div>
        </div>

        <div className="comment_content">{content}</div>

        <div className="comment-footer">
            <div className="comment_upvote-container">
                <i className="ri-arrow-up-s-line"></i>
                <div>{upvote}</div>
                </div>
            <div className="comment_downvote-container">
                <i className="ri-arrow-down-s-line"></i>
                <div>{downvote}</div>
                </div>
            <div className="comment_response_button" role="button">Répondre</div>
        </div>


        <div className="comment_responses">{responses}</div>



      </div>

    </div>
  );
};

export default Comment;
