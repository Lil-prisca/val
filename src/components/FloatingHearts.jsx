import { motion } from "framer-motion";
import "../styles/FloatingHeart.css";

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(50)].map((_, i) => {
        const startX = Math.random() * 100;
        const drift = Math.random() * 60 - 30;
        const duration = 6 + Math.random() * 4;
        const delay = Math.random * 4;
        return (
          <motion.span
            key={i}
            className="heart"
            initial={{
              bottom: "-10%",
              left: `${startX}%`,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              bottom: "110%",
              x: drift,
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 0.9],
            }}
            transition={{
              // duration: 10,
              delay,
              repeat: Infinity,
              duration,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.span>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
