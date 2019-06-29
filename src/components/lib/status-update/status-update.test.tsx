import React from "react";
import StatusUpdate from "./status-update";
import { render } from "@testing-library/react";
import MStatusUpdateFixture from "../../../models/fixtures/status-update.fixture";

describe("when the component loads", () => {
  const statusUpdate = new MStatusUpdateFixture();

  it("should render", () => {
    render(<StatusUpdate statusUpdate={statusUpdate} />);
  });
});
