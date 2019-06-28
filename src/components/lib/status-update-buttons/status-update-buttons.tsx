import React from "react";
import "./status-update-buttons.scss";

export interface StatusUpdateButtonsProps {
  onClickLike?: () => void;
  onClickComments?: () => void;
}

function StatusUpdateButtons(props: StatusUpdateButtonsProps) {
  return (
    <div className="status-update-buttons">
      <div className="status-update-buttons__like" onClick={props.onClickLike}>
        Like
      </div>
      <div
        className="status-update-buttons__comments"
        onClick={props.onClickComments}
      >
        Comments
      </div>
    </div>
  );
}

export default StatusUpdateButtons;
