import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl"
      >
        <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hello, World! I'm
        </motion.p>

        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Samyam Jung Thapa Chhetri
        </motion.h1>

        <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
          Full Stack Developer
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Building scalable, production-ready web applications with React.js and modern
          JavaScript/TypeScript. Passionate about clean code, open-source, and great user experiences.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-violet-600 text-violet-400 hover:bg-violet-600/10 rounded-lg font-medium transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-5 justify-center mt-10">
          {[
            { label: "GitHub", href: "https://github.com/sjungthapa" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/samyam-jung-thapa-2a440b329/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 12L2 6h12L8 12z" />
        </svg>
      </motion.div>
    </section>
  );
}
