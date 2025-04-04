import { motion } from "motion/react";

export default function HoverAndTap() {
  const buttonStyle = {
    background: "white",
    border: "2px solid rgba(0, 0, 0, 0.2)",
    width: "300px",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
      <motion.button
        style={buttonStyle}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 255, 0.1)", transition: { duration: 0.2 } }}


        whileTap={{ scale: 0.95 }}
      >
        Click me
      </motion.button>
    </div>
  );
}
