import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from ".";

describe("<Footer />", () => {
  it("renders the footer to the screen", () => {
    // ARRANGE
    render(<Footer />);
    // ASSERT
    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  });
});
