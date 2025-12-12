// src/components/ui/ButtonPrimary.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ButtonPrimary({ href = "#", children, className = "" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`btn-primary inline-flex items-center gap-2 ${className}`}
      role="button"
    >
      {children}
    </motion.a>
  );
}
