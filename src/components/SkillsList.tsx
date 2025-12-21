import React from "react";
import { motion } from "framer-motion";
import type { SkillGroup } from "../types/portfolio";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export const SkillsList: React.FC<{
  skills?: SkillGroup[];
  isBar?: boolean;
}> = ({ skills = [] }) => {
  // Flatten skills from all groups (even though we only have one group now)
  const allSkills = skills.flatMap((g) => g.skills ?? []);

  return (
    <div className="flex flex-wrap gap-4">
      {allSkills.map((s, i) => {
        const Icon =
          SiIcons[s.icon as keyof typeof SiIcons] ||
          FaIcons[s.icon as keyof typeof FaIcons];
        return (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:border-[var(--brand)] hover:shadow-md transition-all cursor-default"
          >
            {Icon && <Icon className="w-6 h-6 text-[var(--brand)]" />}
            <span className="font-medium text-lg text-[var(--text)]">
              {s.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsList;
