import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Personal } from "../types/portfolio";

export const About: React.FC<{ personal: Personal }> = ({ personal }) => {
  const text = personal.name.split("");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--brand)]">
          Hi, I'm{" "}
          {text.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-4 text-lg max-w-prose">{personal.headline}</p>

        <div className="mt-6 text-md dark:prose-invert max-w-none text-[var(--muted)]">
          <p>
            I am a Computer Science student with a passion for learning new technologies and improving my problem-solving
            skills. Throughout my studies, I have worked on multiple academic and project-based systems, including desktop applications, database systems, and mobile applications.
          </p>
          <p>
            Location: Ipoh, Malaysia
          </p>
          <p>
            Date of Birth: 19 June 2003
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--brand)] bg-[var(--brand)] text-white font-medium transition-all hover:bg-transparent hover:text-[var(--brand)]"
          >
            See projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--brand)] bg-[var(--brand)] text-white font-medium transition-all hover:bg-transparent hover:text-[var(--brand)]"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex items-center justify-center"
      >
        <div className="w-75 h-75 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
          {personal.avatar ? (
            <img
              className="w-full h-full object-cover scale-110 -translate-y-2"
              src={personal.avatar}
              alt="profile"
            />
          ) : (
            personal.name?.split(" ")[0]?.[0]
          )}
        </div>
      </motion.aside>
    </>
  );
};
