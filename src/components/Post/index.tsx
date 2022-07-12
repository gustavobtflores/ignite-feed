import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";
import { PostContent } from "../../App";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./style.module.scss";

export interface CommentTypes {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  publishedAt: Date;
}

interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  content: PostContent[];
  publishedAt: Date;
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
  const [commentFormValue, setCommentFormValue] = useState<string>("");
  const [comments, setComments] = useState<CommentTypes[]>([
    {
      id: 1,
      user: {
        name: "Gustavo Flores",
        avatar: "https://github.com/gustavobtflores.png",
      },
      content: "Muito bom Gustavo, parabéns!! 👏👏",
      publishedAt: new Date(),
    },
  ]);

  const publishedDateFormatted = format(
    new Date(publishedAt),
    "d 'de' LLLL 'às' H:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { locale: ptBR, addSuffix: true }
  );

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    const newComment: CommentTypes = {
      id: Math.random(),
      content: commentFormValue,
      publishedAt: new Date(),
      user: {
        name: "Gustavo Flores",
        avatar: "https://www.github.com/gustavobtflores.png",
      },
    };

    setComments((comments) => {
      return [...comments, newComment];
    });

    setCommentFormValue("");
  };

  const deleteComment = (content: string) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.content !== content
    );
    setComments(commentsWithoutDeletedOne);
  };

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.user}>
            <Avatar image={author.avatarUrl} />
            <div className={styles["user-info"]}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormatted}
            dateTime={new Date(publishedAt).toISOString()}
            className={styles["posted-time"]}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((item) => {
            if (item.type === "paragraph") {
              return <p key={item.text}>{item.text}</p>;
            } else if (item.type === "link") {
              return (
                <p key={item.text}>
                  <a href={item.text} target="_blank">
                    {item.text}
                  </a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            onChange={(event) => {
              setCommentFormValue(event.target.value);
            }}
            placeholder="Deixe seu comentário"
            value={commentFormValue}
          />

          <button type="submit" disabled={commentFormValue.length === 0}>
            Publicar
          </button>
        </form>
      </article>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </>
  );
};
