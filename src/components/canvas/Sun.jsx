import React from "react";
import { motion } from "framer-motion";

const SunAnimation = () => {
  // Keyframes for x and y positions to create an arc movement
  const arcAnimation = {
    x: [0, 100, 200, 300, 400, 500], // Horizontal positions
    y: [0, -100, -150, -100, -50, 0], // Vertical positions for an arc
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-blue-300 to-blue-200 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-400 rounded-full"
        animate={arcAnimation}
        transition={{
          duration: 10, // Adjust for slower or faster sunrise/sunset
          ease: "easeInOut",
          repeat: Infinity, // Loops the animation indefinitely
          repeatType: "reverse", // Reverses the animation back and forth
        }}
      />
    </div>
  );
};

export default SunAnimation;
