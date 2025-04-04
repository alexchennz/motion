import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ExitAnimations() {
  const [show, setShow] = useState(true);

  const background = {
    background: "red",
    width: "300px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      <button onClick={() => setShow((prev) => !prev)}>Toggle Modal</button>
      <AnimatePresence>
        {show && (
          <motion.div
            style={background}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
