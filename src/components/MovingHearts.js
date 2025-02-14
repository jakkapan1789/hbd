import { motion } from "framer-motion";

const heartVariants = {
  animate: {
    y: [-10, 10, -10], // ขยับขึ้นลง
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const MovingHearts = () => {
  const hearts = new Array(10).fill(0); // สร้างหัวใจ 10 ดวง

  return (
    <div className="hearts-container">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="heart"
          variants={heartVariants}
          animate="animate"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default MovingHearts;
