import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HistoryTable } from ".";

const historyData = [
  {
    game_id: "1",
    game_name: "Connect 4",
    player1: "Alice",
    player2: "Bob",
    winner: "Alice",
    game_timestamp: "2023-07-05T14:48:00.000Z",
  },
  {
    game_id: "2",
    game_name: "Noughts & Crosses",
    player1: "Charlie",
    player2: "Dave",
    winner: "Dave",
    game_timestamp: "2023-07-06T14:48:00.000Z",
  },
];

describe("HistoryTable", () => {
  test("renders correctly with given history data", () => {
    render(<HistoryTable historyData={historyData} />);

    // Check if the table header cells are rendered
    expect(screen.getByText(/Game Played/i)).toBeInTheDocument();
    expect(screen.getByText(/Player 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Player 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Winner/i)).toBeInTheDocument();

    // Check if the table body cells are rendered with the correct data
    expect(screen.getByText(/Connect 4/i)).toBeInTheDocument();
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();
    expect(screen.getByText(/5-7-2023/i)).toBeInTheDocument();

    expect(screen.getByText(/Noughts & Crosses/i)).toBeInTheDocument();
    expect(screen.getByText(/Charlie/i)).toBeInTheDocument();
    expect(screen.getByText(/6-7-2023/i)).toBeInTheDocument();
  });
});
