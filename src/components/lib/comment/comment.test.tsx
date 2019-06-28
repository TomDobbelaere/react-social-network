import React from "react";
import { render } from "@testing-library/react";
import Comment from "./comment";

describe("when the component loads", () => {
  it("should render", () => {
    render(<Comment />);
  });
});
