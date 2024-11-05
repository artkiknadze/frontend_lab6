import { motion } from "framer-motion";
import { useState } from "react";

export const Task5 = () => {
  const [animation, setAnimation] = useState({});

  const handleDragEnd = (event, info) => {
    console.log(info);
    if (info.offset.x < -50) {
      setAnimation({ x: -100, backgroundColor: "blue" });
    } else if (info.offset.x > 50) {
      setAnimation({ x: 100, backgroundColor: "red" });
    } else {
      setAnimation({ x: 0, y: 0, backgroundColor: "yellow" });
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={animation}
      transition={{ duration: 0.5 }}
      style={{
        width: 64,
        height: 64,
        backgroundColor: "yellow",
      }}
    />
  );
};
