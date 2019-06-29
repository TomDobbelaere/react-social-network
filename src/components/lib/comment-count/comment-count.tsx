import React from "react";
import "./comment-count.scss";

export interface CommentCountProps {
  count: number;
  onClick?: () => void;
}

function CommentCount(props: CommentCountProps) {
  const text = props.count === 1 ? "comment" : "comments";

  return (
    <div className="comment-count">
      <div
        className={
          "comment-count" + (props.count > 0 ? "__clickable" : "__unclickable")
        }
        onClick={props.count > 0 ? props.onClick : () => {}}
      >
        {props.count} {text}
      </div>
    </div>
  );
}

export default CommentCount;
