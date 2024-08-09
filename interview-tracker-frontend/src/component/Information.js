import React from "react";
import { motion } from "framer-motion";

const Information = () => {
  // TypingExplosion component for typing explosion effect
  const TypingExplosion = ({ text }) => {
    const words = text.split(" ");

    return (
      <div className="text-teal-500 text-5xl font-bold mb-6">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.25, duration: 0.5 }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 360],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 p-8">
      <div className="text-center">
        <TypingExplosion text="Interview Tracker" />
        <p className="text-emerald-500">
          This project aims to provide users with a comprehensive tool for
          managing and tracking their interview schedule. The platform allows
          users to store the company name, date of applying to the company,
          topics required in the jd.
        </p>
      </div>
    </div>
  );
};

export default Information;
