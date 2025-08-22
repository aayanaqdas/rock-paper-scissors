import { useEffect } from "react";
import rulesImg from "../assets/image-rules-bonus.svg";
import closeIcon from "../assets/icon-close.svg";

export default function RulesModal({ setShowRulesModal }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

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
