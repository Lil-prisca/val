import { motion } from "framer-motion";
import "../styles/yes.css";

const YesScreen = ({ onContinue }) => {
  return (
    <div className="yes-page">
      <motion.div
        className="yes-card glass"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 className="title-3d">She said YES 💖</h1>

        <p className="yes-sub">And just like that… my heart is full.</p>

        <button className="continue" onClick={onContinue}>
          Continue 💌
        </button>
      </motion.div>
    </div>
  );
};

export default YesScreen;
