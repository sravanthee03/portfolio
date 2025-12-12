// Reusable animation variants for staggered reveals
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};
