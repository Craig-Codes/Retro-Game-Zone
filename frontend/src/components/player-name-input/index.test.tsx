import { screen } from "@testing-library/dom";
import { PlayerNameInput } from ".";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    // ACT
    // ASSERT
    expect(screen.getByText("test name")).toBeInTheDocument(); // Ensure at least one title is present
  });

  it("passes an updated name to parent component", async () => {
    // ARRANGE
    render(
      <PlayerNameInput
        label="Craig"
        name={"Test Value"}
        handleChange={mockHandler}
      />
    );
    // ACT

    console.log("ELEMENT ->>>");

    console.log(screen.getByTestId("player-name-input"));
    userEvent.type(screen.getByLabelText("Craig"), "Tom");
    //expect(screen.getByLabelText("Craig")).toHaveValue("Tom");

    // const input = await screen.findByLabelText("Craig");
    // await userEvent.type(input, "Tom");

    //expect(input).toHaveValue("Tom");
    //expect(mockHandler).toHaveBeenCalled();
    //   expect.objectContaining({ value: "New Value" })
    // );
  });
});
