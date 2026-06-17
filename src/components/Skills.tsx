import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "../utils/animations";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Redux", "Shadcn UI", "Axios", "Responsive Design"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Python (FastAPI / Flask)", "RESTful API Design", "JWT Authentication & Authorization"],
  },
  {
    category: "Databases",
    skills: ["MongoDB (NoSQL)", "SQL & Relational Modeling", "Microsoft SQL Server"],
  },
  {
    category: "Cloud & Tools",
    skills: ["Git & GitHub", "Cloudinary", "Agile / Scrum", "Code Reviews", "Unit Testing"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">
            What I work with
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map(({ category, skills }) => (
              <motion.div
                key={category}
                variants={fadeUp}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-800 transition-colors duration-300"
              >
                <h3 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
