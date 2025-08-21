import { useState, useEffect } from "react";

import Header from "./components/Header";
import Options from "./components/Options";
import RulesModal from "./components/RulesModal";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerPick, setPlayerPick] = useState(null);
  const [computerPick, setComputerPick] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [score, setScore] = useState(0);

  // Win conditions: what each option beats
  const winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }

    if (winConditions[playerChoice].includes(computerChoice)) {
      setScore((prev) => (prev += 1));
      return "win";
    } else {
      return "lose";
    }
  }

  useEffect(() => {
    const options = ["scissors", "spock", "paper", "lizard", "rock"];
    if (isGameStarted) {
      let randomIndex = Math.floor(Math.random() * options.length);
      setComputerPick(options[randomIndex]);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (playerPick && computerPick) {
      const result = determineWinner(playerPick, computerPick);
      setGameResult(result);
    }
  }, [playerPick, computerPick]);

  function handleOptionClick(option) {
    setPlayerPick(option);
    setIsGameStarted(true);
  }
  function newGame() {
    console.log("game reset");
    setIsGameStarted(false);
    setGameResult(null);
    setComputerPick(null);
    setPlayerPick(null);
  }

  return (
    <main>
      <div className="game-container">
        <Header score={score} />

        {!isGameStarted && <Options onOptionClick={handleOptionClick} />}
        {isGameStarted && (
          <GameScreen
            playerPick={playerPick}
            computerPick={computerPick}
            newGame={() => newGame()}
            gameResult={gameResult}
          />
        )}

        <div className="rules-btn-wrapper">
          <button className="rules-btn" onClick={() => setShowRulesModal((prev) => !prev)}>
            RULES
          </button>
        </div>

        {showRulesModal && <RulesModal setShowRulesModal={setShowRulesModal} />}
      </div>
    </main>
  );
}
