import { motion } from "motion/react";

export default function KeyframeAnimation() {
  const background = {
    background: "red",
    width: "100px",
    height: "100px",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={background}
        initial={{ x: 0 }}
        animate={{ x: [0, 200, 300, 0] }} // Looping back
        transition={{
          duration: 2,
          ease: ["easeIn", "easeOut", "linear"],
        }}
      />
    </div>
  );
}
