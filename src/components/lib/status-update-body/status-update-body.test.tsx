import React from "react";
import StatusUpdateBody from "./status-update-body";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<StatusUpdateBody />);
  });
});
