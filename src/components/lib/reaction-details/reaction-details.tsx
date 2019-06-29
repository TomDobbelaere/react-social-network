import React from "react";
import "./reaction-details.scss";

export interface ReactionDetailsProps {
  count: number;
}

function ReactionDetails(props: ReactionDetailsProps) {
  const text = props.count === 1 ? "person likes this" : "people like this";

  return (
    <div className="reaction-details">
      <img src="like.png" alt={text} />
      {props.count} {text}
    </div>
  );
}

export default ReactionDetails;
