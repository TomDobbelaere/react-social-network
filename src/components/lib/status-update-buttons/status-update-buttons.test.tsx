import React from "react";
import { render } from "@testing-library/react";
import StatusUpdateButtons from "./status-update-buttons";

describe("when the component loads", () => {
  it("should render", () => {
    render(<StatusUpdateButtons />);
  });

  it("should call the like function when clicking like", () => {
    const mockFn = jest.fn();

    const { container } = render(<StatusUpdateButtons onClickLike={mockFn} />);
    const button = container.querySelector(
      ".status-update-buttons__like"
    ) as HTMLElement;
    button.click();

    expect(mockFn).toHaveBeenCalled();
  });

  it("should call the comments function when clicking comments", () => {
    const mockFn = jest.fn();

    const { container } = render(
      <StatusUpdateButtons onClickComments={mockFn} />
    );
    const button = container.querySelector(
      ".status-update-buttons__comments"
    ) as HTMLElement;
    button.click();

    expect(mockFn).toHaveBeenCalled();
  });
});
