import React from "react";
import "./comment.scss";
import PostMessage from "../post-message/post-message";
import { MComment } from "../../../models/news-feed.model";

export interface CommentProps {
  comment: MComment;
}

function Comment(props: CommentProps) {
  return (
    <div className="comment">
      <PostMessage
        avatarUrl={props.comment.author.avatarUrl}
        name={[
          props.comment.author.firstName,
          props.comment.author.lastName
        ].join(" ")}
        content={props.comment.content}
      />
    </div>
  );
}

export default Comment;
