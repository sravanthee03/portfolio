// Testimonials.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  { text: "Quick learner and dependable. Great team player.", author: "Prof. X" },
  { text: "Delivered high quality work on time.", author: "Mentor Y" },
  { text: "Strong analytical skills and problem solving.", author: "Lead Z" }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 italic">"{data[i].text}"</p>
          <div className="mt-4 font-semibold">{data[i].author}</div>
          <div className="mt-4 flex justify-center gap-2">
            {data.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`w-3 h-3 rounded-full ${i===idx ? 'bg-accent' : 'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
