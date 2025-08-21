import logo from "../assets/logo-bonus.svg";

export default function Header({ score }) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <div className="score-wrapper">
        <p>SCORE</p>
        <span className="score-text">{score}</span>
      </div>
    </header>
  );
}
