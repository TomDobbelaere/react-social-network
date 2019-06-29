import React from "react";
import "./status-update-details.scss";
import ReactionDetails from "../reaction-details/reaction-details";
import CommentCount from "../comment-count/comment-count";

export interface StatusUpdateDetailsProps {
  reactionCount: number;
  commentCount: number;
  onCommentCountClick?: () => void;
}

function StatusUpdateDetails(props: StatusUpdateDetailsProps) {
  return (
    <div className="status-update-details">
      <ReactionDetails count={props.reactionCount} />
      <CommentCount
        count={props.commentCount}
        onClick={props.onCommentCountClick}
      />
    </div>
  );
}

export default StatusUpdateDetails;
