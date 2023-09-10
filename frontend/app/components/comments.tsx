// import "~/styles/comments.css";
import Comment from "~/kits/comment";

type Props = {
  commentsData: any;
};

export default function Comments ({ commentsData }: Props) {

    

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
            isAdmin={comment.isAdmin}
            responsesData={comment.responsesData}
            />
        )})}
        

      </div>

  );
};
