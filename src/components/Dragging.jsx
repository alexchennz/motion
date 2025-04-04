import { motion } from "motion/react";
import { useRef } from "react";

export default function Dragging() {
  const constraintsRef = useRef(null);

  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parent container with constraints */}
      <motion.div
        ref={constraintsRef}
        style={{
          width: "500px",
          height: "500px",
          border: "2px dashed gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Draggable box */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            background: "red",
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "grab",
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          Drag me
        </motion.div>
      </motion.div>
    </div>
  );
}
