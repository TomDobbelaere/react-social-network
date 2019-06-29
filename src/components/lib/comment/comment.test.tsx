import React from "react";
import { render } from "@testing-library/react";
import Comment from "./comment";
import MCommentFixture from "../../../models/fixtures/comment.fixture";

describe("when the component loads", () => {
  it("should render", () => {
    render(<Comment comment={new MCommentFixture()} />);
  });
});
