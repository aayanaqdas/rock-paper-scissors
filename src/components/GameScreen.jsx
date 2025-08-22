export default function GameScreen({ playerPick, computerPick, gameResult, newGame }) {
  console.log("player:", playerPick);
  console.log("comp: ", computerPick);

  const playerWin = gameResult === "win" ? "winner" : "loser";
  const computerWin = gameResult === "lose" ? "winner" : "loser";

  const result = gameResult === "tie" ? "it's a tie" : "you " + gameResult;
  return (
    <div className="game-result-container">
      <div className="player-pick-container">
        <h1>You picked</h1>
        <div className="player-pick-wrapper">
          <button className={`player-pick-btn ${playerPick} ${playerWin}`}>
            <span className="option-btn-inner"></span>
          </button>
        </div>
      </div>

      <div className="result-text_btn-container">
        <h1>{result}</h1>
        <button onClick={newGame}>Play again</button>
      </div>

      <div className="computer-pick-container">
        <h1>The House picked</h1>
        <div className="computer-pick-wrapper">
          <button className={`computer-pick-btn ${computerPick} ${computerWin}`}>
            <span className="option-btn-inner"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
