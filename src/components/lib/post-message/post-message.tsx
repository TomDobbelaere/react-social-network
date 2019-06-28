import React from "react";
import "./post-message.scss";
import Avatar from "../avatar/avatar";
import AuthorName from "../author-name/author-name";
import PostMessageContent from "../post-message-content/post-message-content";

export interface PostMessageProps {
  avatarUrl: string;
  name: string;
  content: string;
}

function PostMessage(props: PostMessageProps) {
  return (
    <div className="post-message">
      <Avatar url={props.avatarUrl} />
      <div className="post-message__content">
        <AuthorName name={props.name} />
        <PostMessageContent text={props.content} />
      </div>
    </div>
  );
}

export default PostMessage;
