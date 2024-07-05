import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ConnectFourGame from ".";

describe("<ConnectFourGame />", () => {
  //const mockHandler = jest.fn();
  it("renders the game board to the user", () => {
    // ARRANGE
    render(<ConnectFourGame inputPlayerNames={["Player 1", "Player 2"]} />);
    // ASSERT
    expect(screen.getByTestId("game-board")).toBeInTheDocument();
  });

  it("renders the reset game button", async () => {
    // ARRANGE
    render(<ConnectFourGame inputPlayerNames={["Player 1", "Player 2"]} />);
    // ACT
    const button = screen.getByRole("button", { name: "Reset Game" });
    // await userEvent.click(button);

    // ASSERT
    expect(button).toBeInTheDocument();
  });

  it("renders the submit winner button", async () => {
    // ARRANGE
    render(<ConnectFourGame inputPlayerNames={["Player 1", "Player 2"]} />);
    // ACT
    const button = screen.getByRole("button", { name: "Submit Winner" });
    // ASSERT
    expect(button).toBeDisabled();
  });
});
