import React from "react";
import { motion } from "framer-motion";
import type { Education } from "../types/portfolio";

export const AcademicHistory: React.FC<{
    education?: Education[];
}> = ({ education = [] }) => {
    return (
        <div>
            {education.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative grid grid-cols-[100px_auto] md:grid-cols-[150px_auto] gap-4 md:gap-8"
                >
                    {/* Date Column (Left) */}
                    <div className="text-right pt-1 font-bold text-[var(--muted)]">
                        {typeof item.date === "string" ? item.date : ""}
                    </div>

                    {/* Timeline Connector & Content Column (Right) */}
                    <div className={`relative border-l-2 border-[var(--border)] pl-8 ${index === education.length - 1 ? 'pb-2' : 'pb-12'}`}>
                        {/* Dot on the timeline */}
                        <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--brand)] border-4 border-[var(--surface)]" />

                        {/* Content */}
                        <h3 className="text-xl font-bold text-[var(--text)]">
                            {item.degree}
                        </h3>
                        <div className="text-lg font-medium text-[var(--muted)] mb-2">
                            {item.school}
                        </div>

                        {item.score && (
                            <div className="mb-2 font-semibold text-[var(--text)]">
                                {item.score}
                            </div>
                        )}

                        {/* Main Subjects / Bullets - Single Column */}
                        {item.bullets && item.bullets.length > 0 && (
                            <div className="mt-3">
                                <span className="text-sm font-semibold text-[var(--muted)] block mb-1">
                                    Main Subjects:
                                </span>
                                <ul className="list-disc list-inside text-sm text-[var(--muted)] flex flex-col gap-1">
                                    {item.bullets.map((subject, idx) => (
                                        <li key={idx}>{subject}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
