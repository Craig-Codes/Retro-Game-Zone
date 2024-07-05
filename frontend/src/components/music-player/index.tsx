import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import { PlayArrow } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import audioTrackOne from "../../assets/retro1.mp3";
import audioTrackTwo from "../../assets/retro2.mp3";
import audioTrackThree from "../../assets/retro3.mp3";
import "./index.css";

type State = "Paused" | "Playing";

// Viewport dimensions
type Dimensions = {
  height: number;
  width: number;
};

const musicTrackArray = [audioTrackOne, audioTrackTwo, audioTrackThree];

const MusicPlayer = () => {
  const nodeRef = useRef(null); // required to remove Draggable deprecation warnings
  const [state, setState] = useState<State>("Paused");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [documentSize, setDocumentSize] = useState<Dimensions>({
    height: 1000,
    width: 1000,
  });

  const cdWidth = document.getElementById("cd")?.offsetWidth;
  const navHeight = document.getElementById("navbar")?.scrollHeight;

  // useEffect fires when component initially rendered to the DOM
  useEffect(() => {
    const updateDocumentSize = () => {
      const documentBody = document.querySelector("body")!;
      setDocumentSize({
        height: documentBody.scrollHeight,
        width: documentBody.scrollWidth,
      });
    };

    updateDocumentSize();

    window.addEventListener("resize", updateDocumentSize);
    return () => {
      window.removeEventListener("resize", updateDocumentSize);
    };
  }, []);

  const scrollHandler = () => {
    const documentBody = document.querySelector("body")!;
    setDocumentSize({
      height: documentBody.scrollHeight,
      width: documentBody.scrollWidth,
    });
  };

  function getRandomIndex<T>(arr: T[]): number {
    return Math.floor(Math.random() * arr.length);
  }

  const audioTrackHasEnded = () => {
    audioRef.current!.src = musicTrackArray[getRandomIndex(musicTrackArray)];
    audioRef.current!.play();
  };

  const clickHandler = () => {
    if (state === "Paused") {
      setState("Playing");
    } else {
      setState("Paused");
    }
  };

  useEffect(() => {
    if (state === "Playing" && audioRef.current) {
      audioRef.current.src = musicTrackArray[getRandomIndex(musicTrackArray)];
      audioRef.current.play();
    } else if (state === "Paused" && audioRef.current) {
      audioRef.current.pause();
    }
  }, [state]);

  const bodyElement = document.querySelector("body");
  if (bodyElement) {
    bodyElement.addEventListener("scroll", scrollHandler);
  }

  return (
    <div style={{ width: "0px", height: "0px" }}>
      <Draggable
        nodeRef={nodeRef}
        bounds={{
          left: 0,
          top: navHeight,
          right: documentSize.width - cdWidth!,
          bottom: documentSize.height - cdWidth!,
        }}
        defaultPosition={{ x: 20, y: 200 }}
      >
        <div id="cd" ref={nodeRef}>
          {state === "Paused" ? (
            <PlayArrow
              data-testid="cd-player-play"
              className="clickable"
              sx={{
                zIndex: "9999",
                color: "#49fb35",
                fontSize: "50px",
              }}
              onClick={clickHandler}
            />
          ) : (
            <PauseIcon
              className="clickable"
              data-testid="cd-player-pause"
              sx={{
                zIndex: "9999",
                color: "#FF5733",
                fontSize: "50px",
              }}
              onClick={clickHandler}
            />
          )}
          <audio ref={audioRef} onEnded={audioTrackHasEnded} />
        </div>
      </Draggable>
    </div>
  );
};

export default MusicPlayer;
