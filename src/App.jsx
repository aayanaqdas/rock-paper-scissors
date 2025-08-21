import { useState } from "react";

import Header from "./components/Header";
import Options from "./components/Options";
import RulesModal from "./components/RulesModal";

export default function App() {
  const [showRulesModal, setShowRulesModal] = useState(false);
  return (
    <main>
      <Header />
      <Options />

      <div className="rules-btn-wrapper">
        <button className="rules-btn" onClick={() => setShowRulesModal((prev) => !prev)}>
          RULES
        </button>
      </div>

      {showRulesModal && <RulesModal setShowRulesModal={setShowRulesModal} />}
    </main>
  );
}
