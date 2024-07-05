import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Popup from ".";

describe("< Popup />", () => {
  test("renders component to the screen", () => {
    render(
      <Popup
        open={true}
        onClose={jest.fn()}
        title={"Modal Title"}
        text={"Modal Text"}
      />
    );
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });
  test("triggers the onClose handler", () => {
    const onCloseMock = jest.fn();
    render(
      <Popup
        open={true}
        onClose={onCloseMock}
        title={"Modal Title"}
        text={"Modal Text"}
      />
    );

    const button = screen.getByRole("button", { name: "Close" });
    fireEvent.click(button);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
