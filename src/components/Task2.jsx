import { motion, useScroll, useTransform } from "framer-motion";

export const Task2 = () => {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 300], [0, -150]);
  const yFast = useTransform(scrollY, [0, 300], [0, -300]);

  return (
    <div>
      <motion.div
        style={{
          y: ySlow,
          background: "blue",
          height: 300,
        }}
      >
        <h2>Повільний паралакс-ефект</h2>
      </motion.div>
      <motion.div style={{ y: yFast, background: "yellow", height: 300 }}>
        <h2>Швидкий паралакс-ефект</h2>
      </motion.div>
    </div>
  );
};
