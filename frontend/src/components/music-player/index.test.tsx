import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MusicPlayer from ".";

// Stub the HTML Media functions Jest can't handle
beforeAll(() => {
  const stubPlay = jest.spyOn(HTMLMediaElement.prototype, "play");
  stubPlay.mockReturnValue(
    new Promise((resolve) => {
      resolve();
    })
  );

  const stubPause = jest.spyOn(HTMLMediaElement.prototype, "pause");
  stubPause.mockReturnValue();
});

describe("<MusicPlayer />", () => {
  it("renders the music CD to the screen in paused mode", () => {
    // ARRANGE
    render(<MusicPlayer />);

    // ACT
    const musicPlayer = screen.getByTestId("cd-player-play");

    // ASSERT
    expect(musicPlayer).toBeInTheDocument();
  });

  it("changes the CD icon on click to pause mode", async () => {
    // ARRANGE
    render(<MusicPlayer />);

    // ACT
    await userEvent.click(screen.getByTestId("cd-player-play"));

    // ASSERT
    expect(screen.getByTestId("cd-player-pause")).toBeInTheDocument();
  });

  it("changes the CD icon on second click back to play mode", async () => {
    // ARRANGE
    render(<MusicPlayer />);

    // ACT
    await userEvent.click(screen.getByTestId("cd-player-play"));
    await userEvent.click(screen.getByTestId("cd-player-pause"));

    // ASSERT
    expect(screen.getByTestId("cd-player-play")).toBeInTheDocument();
  });
});
