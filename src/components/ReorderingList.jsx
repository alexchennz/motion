import { useState } from "react";
import { motion } from "motion/react";

export default function ReorderingList() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const shuffleItems = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <button onClick={shuffleItems}>Shuffle List</button>
      <div style={{ marginTop: 20 }}>
        {items.map((item) => (
          <motion.div
            key={item}
            layout
            style={{
              background: "blue",
              color: "white",
              padding: "10px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            Item {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
