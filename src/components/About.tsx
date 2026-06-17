import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "../utils/animations";
import profilePic from "../assets/profile_pic.JPG";
import cvPdf from "../assets/SamyamJungThapaChhetri_CV.pdf";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 text-white">
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile picture */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <img
                src={profilePic}
                alt="Samyam Jung Thapa Chhetri"
                className="w-64 h-64 rounded-2xl object-cover shadow-2xl shadow-violet-900/40 border border-gray-800"
              />
            </motion.div>

            {/* Text */}
            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
                Hi! I'm <span className="text-violet-400 font-semibold">Samyam Jung Thapa Chhetri</span>, a full-stack
                developer based in Kathmandu, Nepal. I build scalable, production-ready web applications
                using React.js and modern JavaScript/TypeScript.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
                I'm skilled in designing RESTful APIs, managing application state, and delivering clean,
                well-documented code in agile team environments. I hold a BSc (Hons) in Computer Science
                from Herald College Kathmandu, graduating with Second Class Honours in December 2024.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
                I work as a <span className="text-violet-400 font-semibold">Software Engineer Intern</span> at{" "}
                <span className="text-violet-400">jawafdehi.org</span>, contributing to both the main platform and
                NGM Archive — a Judicial Data Archive. I'm passionate about frontend performance optimization,
                clean architecture, and UI/UX design.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4 grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Samyam Jung Thapa Chhetri" },
                  { label: "Location", value: "Kathmandu, Nepal" },
                  { label: "Email", value: "sjungthapa37@gmail.com" },
                  { label: "Available", value: "Immediately ✓" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">{label}</span>
                    <p className="text-gray-200 text-sm font-medium mt-0.5 break-all">{value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="pt-2">
                <a
                  href={cvPdf}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Download CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
