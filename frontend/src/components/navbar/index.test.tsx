import { screen } from "@testing-library/dom";
import Navbar from ".";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Need to wrap NavBar in router to stop failign test on useNavigate()

describe("<NavBar />", () => {
  it("renders the navbar with the title", () => {
    // ARRANGE
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // ACT
    const headingText = screen.getAllByText("RetroGameZone");
    // ASSERT
    expect(headingText.length).toBeGreaterThanOrEqual(1); // Ensure at least one title is present
  });
});
