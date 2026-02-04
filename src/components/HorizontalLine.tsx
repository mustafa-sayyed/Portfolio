import { motion } from "motion/react";

function HorizontalLine() {
  return (
    <motion.hr
      className="h-0.5 w-full my-10"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
  );
}

export default HorizontalLine;
