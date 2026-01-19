import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import YesScreen from "../components/YesScreen";
import ValentineCard from "../components/ValentineCard";
import "../styles/home.css";

const Home = () => {
  const [step, setStep] = useState("question"); // question | yes | letter
  const [rejected, setRejected] = useState(false);

  if (step === "yes") return <YesScreen onContinue={() => setStep("letter")} />;
  if (step === "letter") return <ValentineCard />;

  return (
    <div className={`home ${rejected ? "dim" : ""}`}>
      <FloatingHearts />
      <motion.div
        className="question-box glass"
        animate={rejected ? { x: [0, -6, 6, -4, 4, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <h1 className="title-3d">
          {rejected
            ? "So you no love me abi? 😭"
            : "Will you be my Valentine? 💖"}
        </h1>

        {rejected && (
          <motion.p
            className="retry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Try again 👀
          </motion.p>
        )}

        <div className="buttons">
          <button className="yes" onClick={() => setStep("yes")}>
            Yes 💕
          </button>

          <button className="no" onClick={() => setRejected(true)}>
            No 😢
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
