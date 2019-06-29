import React from "react";
import { render } from "@testing-library/react";
import StatusUpdateComments from "./status-update-comments";
import MCommentFixture from "../../../models/fixtures/comment.fixture";

describe("when the component loads", () => {
  const comments = [
    new MCommentFixture({ id: 1 }),
    new MCommentFixture({ id: 2 })
  ];

  it("should render", () => {
    render(<StatusUpdateComments comments={comments} />);
  });
});
