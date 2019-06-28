import React from "react";
import "./status-update.scss";
import StatusUpdateBody from "../status-update-body/status-update-body";
import StatusUpdateDetails from "../status-update-details/status-update-details";
import StatusUpdateButtons from "../status-update-buttons/status-update-buttons";
import StatusUpdateComments from "../status-update-comments/status-update-comments";
import { MStatusUpdate } from "../../../models/news-feed.model";

export interface StatusUpdateProps {
  statusUpdate: MStatusUpdate;
}

function StatusUpdate(props: StatusUpdateProps) {
  return (
    <div className="status-update">
      <StatusUpdateBody
        author={props.statusUpdate.author}
        content={props.statusUpdate.content}
      />
      <StatusUpdateDetails
        reactionCount={props.statusUpdate.likes}
        commentCount={props.statusUpdate.comments.length}
      />
      <StatusUpdateButtons />
      <StatusUpdateComments comments={props.statusUpdate.comments} />
    </div>
  );
}

export default StatusUpdate;
