import { motion } from "framer-motion";
import "../styles/card.css";

const ValentineCard = () => {
  return (
    <div className="letter-page">
      <motion.div
        className="letter glass"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="title-3d">Desewa Mhi 💌</h2>

        <p>
          From the moment you came into my life, everything became brighter.
          Your smile, your laughter, your presence — they mean more to me than
          words can explain.
        </p>

        <p>
          I don’t just want today… I want all my tomorrows with you. Thank you
          for being my Valentine 💖
        </p>

        <p className="signature">
          Yours Always <br /> My own Emimimobamike
        </p>
      </motion.div>
    </div>
  );
};

export default ValentineCard;
