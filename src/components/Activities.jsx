import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaStar } from "react-icons/fa";

export default function Activities() {
  const items = [
    {
      title: "Design Head, IEEE MTT-S",
      desc: "Managed stage coordination and logistics for inter-college cultural competitions. Collaborated with student clubs to ensure smooth event scheduling and execution.",
      icon: <FaStar className="text-accent text-2xl" />
    },
    {
      title: "Core Member, Sahiti Literary Association",
      desc: "Assisted in planning event schedules, managing stage operations, and ensuring smooth execution of cultural activities.",
      icon: <FaUsers className="text-accent text-2xl" />
    }
  ];

  return (
    <motion.section id="activities" className="py-16 px-6 md:px-12 max-w-5xl mx-auto"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <motion.h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white" initial={{ y: 20 }} whileInView={{ y: 0 }}>
        Extracurricular <span className="text-accent">Activities</span>
      </motion.h2>

      <div className="space-y-8">
        {items.map((it, i) => (
          <motion.div key={i} className="flex gap-5 items-start"
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i*0.12 }}>
            <div>{it.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{it.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
