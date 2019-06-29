import React, { useState } from "react";
import "./status-update.scss";
import StatusUpdateBody from "../status-update-body/status-update-body";
import StatusUpdateDetails from "../status-update-details/status-update-details";
import StatusUpdateButtons from "../status-update-buttons/status-update-buttons";
import StatusUpdateComments from "../status-update-comments/status-update-comments";
import MStatusUpdate from "../../../models/status-update.model";

export interface StatusUpdateProps {
  statusUpdate: MStatusUpdate;
}

function StatusUpdate(props: StatusUpdateProps) {
  const [expandedComments, setExpandedComments] = useState(false);

  function toggleCommentsExpansion() {
    setExpandedComments(!expandedComments);
  }

  return (
    <div className="status-update">
      <StatusUpdateBody
        author={props.statusUpdate.author}
        content={props.statusUpdate.content}
      />
      <StatusUpdateDetails
        reactionCount={props.statusUpdate.likes}
        commentCount={props.statusUpdate.comments.length}
        onCommentCountClick={toggleCommentsExpansion}
      />
      <StatusUpdateButtons onClickComments={toggleCommentsExpansion} />
      {expandedComments ? (
        <StatusUpdateComments comments={props.statusUpdate.comments} />
      ) : null}
    </div>
  );
}

export default StatusUpdate;
