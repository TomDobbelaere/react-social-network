import React from "react";
import StatusUpdateBody from "./status-update-body";
import { render } from "@testing-library/react";
import MStatusUpdateFixture from "../../../models/fixtures/status-update.fixture";

describe("when the component loads", () => {
  const statusUpdate = new MStatusUpdateFixture();

  it("should render", () => {
    render(
      <StatusUpdateBody
        author={statusUpdate.author}
        content={statusUpdate.content}
      />
    );
  });
});
