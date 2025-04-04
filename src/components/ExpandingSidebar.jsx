import { useState } from "react";
import { motion } from "motion/react";

export default function ExpandingSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <motion.div
        layout
        style={{
          width: open ? "200px" : "50px",
          background: "black",
          color: "white",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "width 0.3s ease",
        }}
      >
        <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>
        {open && <p>Menu Item 1</p>}
        {open && <p>Menu Item 2</p>}
      </motion.div>
      <div style={{ flex: 1, padding: "20px" }}>Main Content</div>
    </div>
  );
}
