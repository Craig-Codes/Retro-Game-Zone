import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { LeaderList } from ".";

const leaderData = [
  {
    player: "Craig",
    games_won: 10,
  },
  {
    player: "John",
    games_won: 9,
  },
  {
    player: "Steve",
    games_won: 3,
  },
];

describe("< HistoryTable />", () => {
  test("renders component to the screen", () => {
    render(<LeaderList winnerData={leaderData} />);
    expect(screen.getByText("🥇")).toBeInTheDocument();
  });

  test("outputs winner data onto screen correctly", () => {
    render(<LeaderList winnerData={leaderData} />);
    expect(screen.getByText("Craig")).toBeInTheDocument();
    expect(screen.getByText("Games Won: 10")).toBeInTheDocument();
  });
});
