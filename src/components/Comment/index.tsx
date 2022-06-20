import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import { CommentTypes } from "../Post";
import styles from "./style.module.scss";

interface CommentProps {
  comment: CommentTypes;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} image={comment.user.avatar} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.user.name}</strong>
              <time title={comment.time.toString()} dateTime={comment.time.toString()}>
                {comment.time.toLocaleString("pt-br")}
              </time>
            </div>
            <button title="Deletar comentário" className={styles.deleteButton}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>
        <footer>
          <button className={styles.likeButton}>
            <ThumbsUp color="#8d8d99" size={20} />
            Aplaudir<span>{10}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
