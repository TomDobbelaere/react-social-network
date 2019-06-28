import React from "react";
import "./post-message-content.scss";

export interface PostMessageContentProps {
  text: string;
}

function PostMessageContent(props: PostMessageContentProps) {
  return <div className="post-message-content">{props.text}</div>;
}

export default PostMessageContent;
