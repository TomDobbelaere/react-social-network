import React from "react";
import NewsFeed from "./news-feed";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<NewsFeed />);
  });
});
