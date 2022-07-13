import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { CommentTypes } from "../Post";
import styles from "./style.module.scss";

interface CommentProps {
  comment: CommentTypes;
  onDeleteComment: (content: string) => void;
}

export const Comment = ({ comment, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((count) => count + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} image={comment.user.avatar} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.user.name}</strong>
              <time
                title={comment.publishedAt.toString()}
                dateTime={comment.publishedAt.toString()}
              >
                {formatDistanceToNow(comment.publishedAt, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </time>
            </div>
            <button
              onClick={() => onDeleteComment(comment.content)}
              title="Deletar comentário"
              className={styles.deleteButton}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>
        <footer>
          <button className={styles.likeButton} onClick={handleLikeComment}>
            <ThumbsUp color="#8d8d99" size={20} />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
