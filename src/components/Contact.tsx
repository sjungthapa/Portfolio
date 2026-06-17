import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to Formspree or EmailJS here
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">
            Let's talk
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-3">
            Have a project in mind or just want to say hi? My inbox is always open.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-10">
            You can also reach me directly at{" "}
            <a href="mailto:sjungthapa37@gmail.com" className="text-violet-400 hover:underline">
              sjungthapa37@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+9779863037870" className="text-violet-400 hover:underline">
              +977-9863037870
            </a>
          </motion.p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-violet-900/30 border border-violet-700 rounded-xl p-8 text-center"
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-white font-semibold text-lg mb-1">Message Sent!</h3>
              <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-violet-400 text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={staggerContainer}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-gray-400 text-sm mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Send Message
                </button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
