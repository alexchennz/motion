import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "black",
                zIndex: 10
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                position: "fixed",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                zIndex: 20
              }}
            >
              <p>This is a modal</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
