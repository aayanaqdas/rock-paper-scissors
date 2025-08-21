import logo from "../assets/logo-bonus.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <div className="score-wrapper">
        <p>SCORE</p>
        <span className="score-text">12</span>
      </div>
    </header>
  );
}
