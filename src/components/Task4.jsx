import { motion } from "framer-motion";

export const Task4 = () => (
  <div>
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{
        delay: 0,
        duration: 2,
        repeat: Infinity,
      }}
      style={{ width: 64, height: 64, backgroundColor: "yellow" }}
    />
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{
        delay: 0.1,
        duration: 2,
        repeat: Infinity,
      }}
      style={{ width: 64, height: 64, backgroundColor: "yellow" }}
    />
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{
        delay: 0.2,
        duration: 2,
        repeat: Infinity,
      }}
      style={{ width: 64, height: 64, backgroundColor: "yellow" }}
    />
  </div>
);
