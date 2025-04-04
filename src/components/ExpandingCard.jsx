import { useState } from "react";
import { motion } from "motion/react";

export default function ExpandingCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <motion.div
        layout
        style={{
          background: "red",
          borderRadius: "10px",
          width: expanded ? "300px" : "150px",
          height: "150px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        Click Me
      </motion.div>
    </div>
  );
}
