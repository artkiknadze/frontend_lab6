import { motion } from "framer-motion";

export const Task1 = () => (
  <motion.div
    initial={{
      x: 0,
      y: 0,
      backgroundColor: "#326273",
      opacity: 1,
      scale: 1,
    }}
    animate={{
      x: [0, 34, 25, 85, 65, 68, 0],
      y: [0, 14, -2, 4, 6, -6, 0],
      backgroundColor: ["#326273", "#E39774", "#F49097", "#F5E960"],
      opacity: [1, 0.75, 0.25, 0.57, 1],
      scale: [1, 1.15, 1.4, 1.7, 1],
    }}
    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
    style={{ width: 64, height: 64 }}
  />
);
