import React from "react";
import Avatar from "./avatar";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<Avatar url="" />);
  });

  it("should set the url of the image to the provided url", () => {
    const url = "doggy.jpg";
    const { container } = render(<Avatar url={url} />);
    const img = container.querySelector("img");

    expect(img).toHaveAttribute("src", url);
  });

  it("should set the alt text of the image to the provided alt text", () => {
    const alt = "A cute dog";
    const { container } = render(<Avatar url="doggy.jpg" alt={alt} />);
    const img = container.querySelector("img");

    expect(img).toHaveAttribute("alt", alt);
  });
});
