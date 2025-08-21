import rulesImg from "../assets/image-rules-bonus.svg";
import closeIcon from "../assets/icon-close.svg";

export default function RulesModal(props) {
  const { setShowRulesModal } = props;
  return (
    <div className="rules-modal-container">
      <div className="rules-modal">
        <div className="rules-text_close-btn">
          <h1>RULES</h1>
          <button onClick={() => setShowRulesModal((prev) => !prev)}>
            <img src={closeIcon} alt="close modal" />
          </button>
        </div>
        <div className="rules-img-wrapper">
          <img src={rulesImg} alt="Rules" />
        </div>
      </div>
    </div>
  );
}
