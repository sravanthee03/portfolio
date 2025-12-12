// src/components/RevealSection.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
      duration: 0.6,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RevealSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={container}
    >
      {React.Children.map(children, (childNode) => (
        <motion.div variants={child}>{childNode}</motion.div>
      ))}
    </motion.section>
  );
}
