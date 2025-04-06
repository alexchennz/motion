import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const items = [1, 2, 3, 4];

export default function ExpandingGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
      padding: "40px"
    }}>
      {items.map((item) => (
        <motion.div
          key={item}
          layout
          onClick={() => setSelected(item === selected ? null : item)}
          style={{
            background: "#ef4444",
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            cursor: "pointer",
            gridColumn: selected === item ? "span 2" : "auto"
          }}
        >
          <h2>Card {item}</h2>
          <AnimatePresence>
            {selected === item && (
              <motion.div
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ marginTop: "10px" }}
              >
                <p>This is more information about card {item}.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
