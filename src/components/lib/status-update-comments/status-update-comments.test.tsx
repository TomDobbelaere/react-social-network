import React from "react";
import { render } from "@testing-library/react";
import StatusUpdateComments from "./status-update-comments";

describe("when the component loads", () => {
  it("should render", () => {
    render(<StatusUpdateComments />);
  });
});
