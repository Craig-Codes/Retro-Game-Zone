import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { GameCard } from ".";
import defaultImage from "../../assets/error.png";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const renderWithRouter = (GameCard: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]}>{GameCard}</MemoryRouter>
  );
};

describe("<GameCard />", () => {
  it("renders the game card title and description to the screen", () => {
    // ARRANGE
    renderWithRouter(
      <GameCard
        gameName={"Fallout 1"}
        gameImage={`${defaultImage}`}
        gameDescription={"Great Retro RPG"}
        gameLink={"/connect-four"}
        gameRuleLink={
          "https://shop.houseofmarbles.com/puzzle-solutions/noughts-crosses-pad-pencil-game-instructions/"
        }
      />
    );

    // ACT
    const headingText = screen.getByText("Fallout 1");
    const descriptionText = screen.getByText("Great Retro RPG");

    // ASSERT
    expect(headingText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });

  it("navigates to the game link on click", async () => {
    // ARRANGE
    renderWithRouter(
      <Routes>
        <Route
          path="/"
          element={
            <GameCard
              gameName={"Fallout 1"}
              gameImage={`${defaultImage}`}
              gameDescription={"Great Retro RPG"}
              gameLink={"/connect-four"}
              gameRuleLink={
                "https://shop.houseofmarbles.com/puzzle-solutions/noughts-crosses-pad-pencil-game-instructions/"
              }
            />
          }
        />
        <Route path="/connect-four" element={<div>Connect Four Game</div>} />
      </Routes>,
      { route: "/" }
    );

    // ACT
    await userEvent.click(screen.getByText("Play"));

    // ASSERT
    expect(screen.getByText(/Connect Four/i)).toBeInTheDocument();
  });
});
