import { fireEvent, screen } from "@testing-library/dom";
import { PlayerNameInput } from ".";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("<PlayerNameInput />", () => {
  const mockHandler = jest.fn();
  it("renders the player name component with label", () => {
    // ARRANGE
    render(
      <PlayerNameInput
        label={"test name"}
        name={""}
        handleChange={mockHandler}
      />
    );
    // ASSERT
    expect(screen.getByText("test name")).toBeInTheDocument(); // Ensure at least one title is present
  });

  it("triggers the name change handler on input", () => {
    const mockHandler = jest.fn();
    // ARRANGE
    render(
      <PlayerNameInput
        label={"test name"}
        name={""}
        handleChange={mockHandler}
      />
    );

    const input = screen.getByLabelText("test name");

    fireEvent.change(input, { target: { value: "Craig" } });

    expect(mockHandler).toHaveBeenCalled();
  });
});
