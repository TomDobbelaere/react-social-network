import React from "react";
import StatusUpdate from "./status-update";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<StatusUpdate />);
  });
});
