import logo from "./assets/logo-bonus.svg";

export default function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="Logo" />
        <div className="score-wrapper">
          <p>SCORE</p>
          <span className="score-text">12</span>
        </div>
      </header>
      <div className="options-container">
        <div className="option-btn scissors">
          <span className="option-btn-inner"></span>
        </div>
        <div className="option-btn spock">
          <span className="option-btn-inner"></span>
        </div>
        <div className="option-btn paper">
          <span className="option-btn-inner"></span>
        </div>
        <button className="option-btn lizard">
          <span className="option-btn-inner"></span>
        </button>
        <div className="option-btn rock">
          <span className="option-btn-inner"></span>
        </div>
      </div>
    </main>
  );
}
