import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

const certificates = [
  { title: "NVIDIA – VIT Vellore", platform: "NVIDIA @ VIT", year: "Sep 2025", link: "https://drive.google.com/file/d/1f4bXHSiXucv0NGN7YDRc9dnDMTN4WsO1/view" },
  { title: "Big Data 101", platform: "IBM Developer Skills", year: "", link: "https://drive.google.com/file/d/1_k7I1VNASngFZW5r_sHbavNzVS7ztJwm/view" },
  { title: "AWS – Solutions Architecture", platform: "AWS", year: "", link: "https://drive.google.com/file/d/1Mm7ErP6YjCN_q1WJaGkQIW4Nl05oAp3n/view" },
  { title: "Artificial Intelligence", platform: "HP LIFE", year: "", link: "https://drive.google.com/file/d/1arPri4H7j5zJsQvHKSr5wJxk9ilp4BCB/view" },
  { title: "Wildlife & Ecology", platform: "", year: "", link: "https://drive.google.com/file/d/1K2aUexxXYw54b-oRynTVbRaD_jOU5-pr/view" }
];

export default function Certificates() {
  return (
    <motion.section id="certificates" className="py-16 px-6 md:px-12 max-w-6xl mx-auto"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <motion.h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white" initial={{ y: 20 }}>
        My <span className="text-accent">Certificates</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c, i) => (
          <motion.article key={i}
            className="p-5 rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i*0.12 }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-blue-300">
                <FaCertificate className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                {c.platform && <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{c.platform} {c.year ? `• ${c.year}` : ""}</p>}
                <div className="mt-4 flex items-center justify-between">
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300 hover:text-blue-800">
                    <FaExternalLinkAlt className="w-4 h-4" /> View Certificate
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{i+1}/{certificates.length}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
