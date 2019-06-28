import React from "react";
import "./reaction-details.scss";

export interface ReactionDetailsProps {
  count: number;
}

function ReactionDetails(props: ReactionDetailsProps) {
  const text =
    props.count === 1
      ? "person is okay with this"
      : "people are okay with this";

  return (
    <div className="reaction-details">
      <img src="ok.png" alt="ok" />
      {props.count} {text}
    </div>
  );
}

export default ReactionDetails;
