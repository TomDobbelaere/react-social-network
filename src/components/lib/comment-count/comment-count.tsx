import React from "react";
import "./comment-count.scss";

export interface CommentCountProps {
  count: number;
}

function CommentCount(props: CommentCountProps) {
  const text = props.count === 1 ? "comment" : "comments";

  return (
    <div className="comment-count">
      {props.count} {text}
    </div>
  );
}

export default CommentCount;
