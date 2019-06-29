import React from "react";
import "./status-update-body.scss";
import PostMessage from "../post-message/post-message";
import MPerson from "../../../models/person.model";

export interface StatusUpdateBodyProps {
  author: MPerson;
  content: string;
}

function StatusUpdateBody(props: StatusUpdateBodyProps) {
  return (
    <div className="status-update-body">
      <PostMessage
        avatarUrl={props.author.avatarUrl}
        name={[props.author.firstName, props.author.lastName].join(" ")}
        content={props.content}
      />
    </div>
  );
}

export default StatusUpdateBody;
