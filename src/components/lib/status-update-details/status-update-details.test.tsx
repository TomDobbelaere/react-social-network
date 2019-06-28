import React from "react";
import { render } from "@testing-library/react";
import StatusUpdateDetails from "./status-update-details";

describe("when the component loads", () => {
  it("should render", () => {
    render(<StatusUpdateDetails />);
  });
});
