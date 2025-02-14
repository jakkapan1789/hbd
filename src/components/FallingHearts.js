import { motion } from "framer-motion";

const FallingHearts = () => {
  const hearts = new Array(10).fill(0); // สร้างหัวใจ 10 ดวง

  return (
    <div className="hearts-container">
      {hearts.map((_, index) => {
        const size = Math.random() * 2 + 1; // สุ่มขนาดระหว่าง 1rem - 3rem
        const duration = Math.random() * 3 + 2; // สุ่มความเร็ว 2 - 5 วินาที
        const leftPosition = Math.random() * 100; // สุ่มตำแหน่งแนวนอน

        return (
          <motion.div
            key={index}
            className="heart"
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: "100vh",
              opacity: [0, 1, 1, 0], // ค่อย ๆ ปรากฏแล้วหายไป
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${leftPosition}%`,
              fontSize: `${size}rem`,
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
};

export default FallingHearts;
