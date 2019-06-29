import React from "react";
import PostMessage from "./post-message";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<PostMessage avatarUrl="" content="" name="" />);
  });
});
