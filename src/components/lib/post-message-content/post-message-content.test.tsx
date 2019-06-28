import React from "react";
import PostMessageContent from "./post-message-content";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<PostMessageContent text="" />);
  });
});
