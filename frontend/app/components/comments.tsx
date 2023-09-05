import "~/styles/comments.css";
import Comment from "~/kits/comment";


export default function Comments () {

    

  return (
      <div className="comments_container">
        
        <Comment username='John Doe' content='Comment on fait pour faire ça ? Merci beaucoup'  userpic='/assets/images/1000x1500-pour-site14.png'  responses='none'  date='21/08'  upvote={6}  downvote={7}  isAdmin={true} />

      </div>

  );
};
