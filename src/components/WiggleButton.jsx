import { motion } from "motion/react";

const variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, 5, -5, 5, -5, 0],
    transition: { duration: 0.6 }
  }
};

export default function WiggleButton() {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <motion.button
        variants={variants}
        initial="initial"
        whileHover="hover"
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Hover Me
      </motion.button>
    </div>
  );
}
