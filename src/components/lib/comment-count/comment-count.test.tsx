import React from "react";
import { render } from "@testing-library/react";
import CommentCount from "./comment-count";

describe("when the component loads", () => {
  it("should render", () => {
    render(<CommentCount count={1} />);
  });

  it("should use the singular form if the count is 1", () => {
    const textContent = "1 comment";
    const { container } = render(<CommentCount count={1} />);

    expect(container).toHaveTextContent(textContent);
  });

  it("should use the plural form if the count is not 1", () => {
    const textContent = "2 comments";
    const { container } = render(<CommentCount count={2} />);

    expect(container).toHaveTextContent(textContent);
  });
});
