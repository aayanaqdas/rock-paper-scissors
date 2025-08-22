import { useState, useEffect } from "react";

export default function GameScreen({
  playerPick,
  computerPick,
  gameResult,
  newGame,
  onScoreUpdate,
}) {
  const [showPlayerPick, setShowPlayerPick] = useState(false);
  const [showComputerPick, setShowComputerPick] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showWinnerShadow, setShowWinnerShadow] = useState(false);

  useEffect(() => {
    // Player pick falls in after a short delay
    const playerTimeout = setTimeout(() => {
      setShowPlayerPick(true);
    }, 300);

    // Computer pick falls in after player pick animation
    const computerTimeout = setTimeout(() => {
      setShowComputerPick(true);
    }, 800);

    // Result appears after both picks are shown
    const resultTimeout = setTimeout(() => {
      if (gameResult) {
        setShowResult(true);
        // Update score when result is shown
        if (gameResult === "win" && onScoreUpdate) {
          onScoreUpdate();
        }
        // Start winner shadow if there's a winner
        if (gameResult !== "tie") {
          setShowWinnerShadow(true);
        }
      }
    }, 1400);

    return () => {
      clearTimeout(playerTimeout);
      clearTimeout(computerTimeout);
      clearTimeout(resultTimeout);
    };
  }, [gameResult, onScoreUpdate]);

  const result = gameResult === "tie" ? "it's a tie" : "you " + gameResult;

  return (
    <div className="game-result-container">
      <div className="player-pick-container">
        <h1>You picked</h1>
        <div className="player-pick-wrapper">
          <div className="pick-placeholder"></div>
          <button
            className={`player-pick-btn ${playerPick} ${
              showPlayerPick ? "animate-fall-in" : "hidden"
            } ${showWinnerShadow && gameResult === "win" ? "winner winner-shadow-animate" : ""}`}
          >
            <span className="option-btn-inner"></span>
          </button>
        </div>
      </div>

      <div className={`result-text_btn-container ${showResult ? "animate-fade-in" : ""}`}>
        <h1>{result}</h1>
        <button className={gameResult === "lose" ? "play-again-lose" : ""} onClick={newGame}>
          Play again
        </button>
      </div>

      <div className="computer-pick-container">
        <h1>The House picked</h1>
        <div className="computer-pick-wrapper">
          <div className="pick-placeholder"></div>
          <button
            className={`computer-pick-btn ${computerPick} ${
              showComputerPick ? "animate-fall-in" : "hidden"
            } ${showWinnerShadow && gameResult === "lose" ? "winner winner-shadow-animate" : ""}`}
          >
            <span className="option-btn-inner"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
