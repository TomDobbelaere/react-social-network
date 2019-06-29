import React from "react";
import "./status-update-comments.scss";
import Comment from "../comment/comment";
import MComment from "../../../models/comment.model";

export interface StatusUpdateCommentsProps {
  comments: MComment[];
}

function StatusUpdateComments(props: StatusUpdateCommentsProps) {
  return (
    <div className="status-update-comments">
      {props.comments.map(comment => {
        return <Comment key={comment.id.toString()} comment={comment} />;
      })}
    </div>
  );
}

export default StatusUpdateComments;
