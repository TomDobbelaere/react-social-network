import React from "react";
import "./avatar.scss";

export interface AvatarProps {
  url: string;
  alt?: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="avatar">
      <img src={props.url} alt={props.alt || ""} />
    </div>
  );
}

export default Avatar;
