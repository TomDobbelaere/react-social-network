import React from "react";
import { render } from "@testing-library/react";
import AuthorName from "./author-name";

describe("when the component loads", () => {
  it("should render", () => {
    render(<AuthorName name="" />);
  });

  it("should set the name to the provided name", () => {
    const name = "John Smith";
    const { container } = render(<AuthorName name={name} />);

    expect(container).toHaveTextContent(name);
  });
});
