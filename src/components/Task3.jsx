import { motion } from "framer-motion";
import { useState } from "react";

export const Task3 = () => {
  const [state, setState] = useState(0);

  const states = [
    { x: 0, y: 0, scale: 1 },
    { x: 135, y: 50, scale: 1.2 },
    { x: 225, y: 0, scale: 0.6 },
    { x: -25, y: 75, scale: 1.5 },
  ];

  return (
    <div>
      <button onClick={() => setState(0)}>Стан 1</button>
      <button onClick={() => setState(1)}>Стан 2</button>
      <button onClick={() => setState(2)}>Стан 3</button>
      <button onClick={() => setState(3)}>Стан 4</button>
      <motion.div
        animate={states[state]}
        transition={{ duration: 1 }}
        style={{ width: 64, height: 64, backgroundColor: "yellow" }}
      />
    </div>
  );
};
