export default function Options({ onOptionClick }) {
  return (
    <div className="options-container">
      <button className="option-btn scissors" onClick={() => onOptionClick("scissors")}>
        <span className="option-btn-inner"></span>
      </button>
      <button className="option-btn spock" onClick={() => onOptionClick("spock")}>
        <span className="option-btn-inner"></span>
      </button>
      <div className="option-btn paper" onClick={() => onOptionClick("paper")}>
        <span className="option-btn-inner"></span>
      </div>
      <button className="option-btn lizard" onClick={() => onOptionClick("lizard")}>
        <span className="option-btn-inner"></span>
      </button>
      <button className="option-btn rock" onClick={() => onOptionClick("rock")}>
        <span className="option-btn-inner"></span>
      </button>
    </div>
  );
}
