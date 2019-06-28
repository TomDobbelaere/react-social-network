import React from "react";
import "./author-name.scss";

export interface AuthorNameProps {
  name: string;
}

function AuthorName(props: AuthorNameProps) {
  return <div className="author-name">{props.name}</div>;
}

export default AuthorName;
