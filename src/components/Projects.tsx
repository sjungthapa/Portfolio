import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "../utils/animations";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  gradient: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "jawafdehi.org & NGM Archive — Software Engineer Intern",
    description:
      "Worked as a Software Engineer Intern contributing to both jawafdehi.org and its product NGM Archive (ngm.jawafdehi.org) — a Judicial Data Archive. Led the frontend redesign of NGM Archive, built a case search section with filtering, pagination, and table management from scratch, and developed backend Python endpoints to support new frontend features.",
    tags: ["React.js", "TypeScript", "Python", "Open Source"],
    github: "https://github.com/sjungthapa",
    live: "https://ngm.jawafdehi.org",
    gradient: "from-emerald-600 to-teal-600",
    badge: "Live",
  },
  {
    title: "Leave Management System",
    description:
      "Complete employee leave management system with role-based access control. Features JWT auth, Google OAuth 2.0, Nodemailer email notifications, and an interactive FullCalendar view for approved leaves.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Ant Design", "Nodemailer"],
    github: "https://github.com/sjungthapa",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Clothing E-Commerce Platform",
    description:
      "Full-featured e-commerce application built end-to-end in a cross-functional team. Includes product management, shopping cart, order processing, Redux state management, and Cloudinary media optimization.",
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary"],
    github: "https://github.com/sjungthapa/E-commerce-Application",
    gradient: "from-indigo-600 to-blue-600",
    badge: "Team Project",
  },
  {
    title: "Grocery E-Commerce Web Application",
    description:
      "Independently architected and delivered a complete grocery shopping platform — database schema, API layer, and React frontend from scratch. Supports role-based access for admin and customer users.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/sjungthapa/AmpleDietMarket",
    gradient: "from-blue-600 to-cyan-600",
    badge: "Final Year Project",
  },
  {
    title: "Collaborative Note-Taking Application",
    description:
      "Feature-rich, accessible note-taking app with strict emphasis on clean code, type safety, and component reusability. Built with TypeScript throughout and Shadcn UI for polished, accessible components.",
    tags: ["React.js", "TypeScript", "Redux", "Shadcn UI"],
    github: "https://github.com/sjungthapa/NotesApp",
    gradient: "from-purple-600 to-violet-600",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">
            What I've built
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Projects
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-12">
            All projects are private / in development except the open-source contribution.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-violet-800 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Color bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-semibold text-base leading-snug">{project.title}</h3>
                    {project.badge && (
                      <span className="flex-shrink-0 px-2 py-0.5 bg-emerald-900/40 text-emerald-400 text-xs rounded-full border border-emerald-800/50">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-violet-900/40 text-violet-300 text-xs rounded-full border border-violet-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-sm transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-sm transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
