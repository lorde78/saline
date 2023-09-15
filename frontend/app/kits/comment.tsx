import React, { useState } from "react";
import "~/styles/comment.css";
import Response from "./response";

type Props = {
  username: string;
  content: string;
  userpic: string;
  date: string;
  upvote: number;
  downvote: number;
  needResponses: boolean;
  responsesData: any;
};

export default function Comment({
  username,
  content,
  userpic,
  date,
  upvote: initialUpvote,
  downvote: initialDownvote,
  responsesData,
  needResponses,
  
}: Props) {
  const [upvote, setUpvote] = useState(initialUpvote);
  const [downvote, setDownvote] = useState(initialDownvote);
  const [userVote, setUserVote] = useState<number | null>(null);
  const [responses, setResponses] = useState<string[]>([]); 
  const [responseContent, setResponseContent] = useState("");

  const handleUpvote = () => {
    if (userVote === null) {
      // L'utilisateur n'a pas encore voté
      setUpvote(upvote + 1);
      setUserVote(1); // 1 = positif, -1 = négatif
    } else if (userVote === -1) {
      // négatif à positif
      setUpvote(upvote + 1);
      setDownvote(downvote - 1);
      setUserVote(1);
    }
  };

  const handleDownvote = () => {
    if (userVote === null) {
      // L'utilisateur n'a pas encore voté
      setDownvote(downvote + 1);
      setUserVote(-1);
    } else if (userVote === 1) {
      // positif à négatif
      setDownvote(downvote + 1);
      setUpvote(upvote - 1);
      setUserVote(-1);
    }
  };

  const handleResponseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (responseContent.trim() !== "") {
      setResponses([...responses, responseContent]); // Ajoutez la nouvelle réponse à l'état des réponses
      setResponseContent(""); // Réinitialisez le champ de texte
    }
  };

  return (
    <div className="comment_container">
      <figure className="comment_profile-pic">
        <img src={userpic} alt="photo de profil" />
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
            <i className="ri-arrow-up-s-line" onClick={handleUpvote}></i>
            <div>{upvote}</div>
          </div>
          <div className="comment_vote-container">
            <i className="ri-arrow-down-s-line" onClick={handleDownvote}></i>
            <div>{downvote}</div>
          </div>
          <div className="comment_response_button" role="button">
            Répondre
          </div>
        </div>
        {needResponses && (
        <div>
          <div className="comment_responses">
            {responsesData &&
              responsesData.map((response, i) => {
                return (
                  <Response
                    key={i}
                    username={response.username}
                    content={response.content}
                    userpic={response.userpic}
                    date={response.date}
                    upvote={response.upvote}
                    downvote={response.downvote}
                  />
                );
              })}
          </div>
          {/* Formulaire de réponse */}
          <form onSubmit={handleResponseSubmit} className="comment_response_form">
            <textarea
              value={responseContent}
              onChange={(e) => setResponseContent(e.target.value)}
              placeholder="Répondez à ce commentaire..."
            />
            <button type="submit">Répondre</button>
          </form>
        </div>
      )}
      </div>
    </div>
  );
}
