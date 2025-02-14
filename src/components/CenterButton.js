import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/CenterButton.module.css";
import Image from "next/image";

const messages = [
  "ขอให้วันนี้เป็นวันที่ดีของหนู 💖",
  "ขอให้สมหวังในทุกสิ่งที่ปรารถนา 😊",
  "ขอให้เจอแต่ความสุขและความรัก ❤️",
  "จะรักหนูตลอดไปนะค่ะ 💕",
  "สุขสันต์วันเกิดนะค่ะที่รักของพี่ ✨",
];

const finalImage = "/images/IMG_0704.jpeg"; // ใส่ path ของรูปที่ต้องการ

const CenterButton = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev < messages.length ? prev + 1 : prev));
  };

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {index < messages.length ? (
          <motion.p
            key={index}
            className={styles.message}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {messages[index]}
          </motion.p>
        ) : (
          <motion.div
            key="image"
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            title="ของขวัญพิเศษสำหรับคุณ! 🎁"
          >
            <Image
              className={styles.imageWrapper}
              src={finalImage}
              alt="Special Gift"
              width={300}
              height={300}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.button}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        disabled={index === messages.length}
      >
        {index < messages.length ? "ลองกดสิ" : "🎉 รักมากๆนะค่ะ! 🎉"}
      </motion.button>
    </div>
  );
};

export default CenterButton;
