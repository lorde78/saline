// import "~/styles/comments.css";
import Comment from "~/kits/comment";

type Props = {
  commentsData: any;
  needResponses: boolean;
};

export default function Comments ({ commentsData, needResponses }: Props) {

    

  return (
      <div className="comments_container">
        {commentsData.map((comment, i) => {
          return (<Comment
            key={i}
            username={comment.username}
            content={comment.content}
            userpic={comment.userpic}
            date={comment.date}
            upvote={comment.upvote}
            downvote={comment.downvote}
            responsesData={comment.responsesData}
            needResponses= {needResponses}
            />
        )})}
        

      </div>

  );
};
