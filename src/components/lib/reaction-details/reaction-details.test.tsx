import React from "react";
import { render } from "@testing-library/react";
import ReactionDetails from "./reaction-details";

describe("when the component loads", () => {
  it("should render", () => {
    render(<ReactionDetails count={1} />);
  });

  it("should use the singular form if the count is 1", () => {
    const textContent = "1 person likes this";
    const { container } = render(<ReactionDetails count={1} />);

    expect(container).toHaveTextContent(textContent);
  });

  it("should use the plural form if the count is not 1", () => {
    const textContent = "2 people like this";
    const { container } = render(<ReactionDetails count={2} />);

    expect(container).toHaveTextContent(textContent);
  });
});
