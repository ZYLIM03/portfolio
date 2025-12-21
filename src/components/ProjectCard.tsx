import React, { useState } from "react";
import { motion } from "framer-motion";
import { tagColors } from "../config/portfolioData";
import type { Project } from "../types/portfolio";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const ProjectCard: React.FC<{
  project: Project;
}> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  // how many tags to show before "+x"
  const VISIBLE_TAGS = 3;

  const visibleTags = showAllTags
    ? project?.tags
    : project?.tags?.slice(0, VISIBLE_TAGS);
  const hiddenCount = (project?.tags?.length ?? 0) - VISIBLE_TAGS;

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="p-4 group rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-full flex-1">
        {/* Media (Video or Image) */}
        {project.video ? (
          <div className="w-full flex justify-center mb-4">
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg border border-[var(--border)] w-full object-cover h-45"
            />
          </div>
        ) : project.image ? (
          <div className="w-full flex justify-center mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg border border-[var(--border)] w-full object-cover h-45"
            />
          </div>
        ) : null}

        {/* Title + Expand Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-[var(--brand)]">
            {project.title}
          </h3>
          <button
            type="button"
            className="text-[var(--brand)] hover:scale-110 transition-transform"
          >
            {isExpanded ? <BsArrowUpRightCircleFill className="rotate-180" size={24} /> : <BsArrowUpRightCircleFill size={24} />}
          </button>
        </div>

        {/* Description */}
        <motion.div animate={{ height: "auto" }}>
          <p className={`text-sm text-[var(--muted)] mt-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Footer: Pinned to bottom, Stacking: Links above Tags */}
      <div className="mt-6 pt-4 border-t border-[var(--border)]/50 flex flex-col gap-4">
        {/* Links (GitHub) - Row 1 */}
        <div className="flex gap-3 flex-wrap text-[var(--muted)]">
          {project.links &&
            project.links.length > 0 &&
            project.links.map((link) => {
              const Icon =
                SiIcons[link.icon as keyof typeof SiIcons] ??
                FaIcons[link.icon as keyof typeof FaIcons];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[var(--text)] inline-flex items-center gap-1 text-sm font-medium text-[var(--link)] hover:underline"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {link.label}
                </a>
              );
            })}
        </div>

        {/* Tags (Tools) - Row 2 (Bottom) */}
        <div className="flex gap-2 flex-wrap">
          {visibleTags?.map((t) => (
            <span
              key={t}
              className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[t] || "bg-gray-100 text-gray-800"
                }`}
            >
              {t}
            </span>
          ))}

          {!showAllTags && hiddenCount > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTags(true);
              }}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
            >
              +{hiddenCount}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
