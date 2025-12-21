import React from "react";
import { motion } from "framer-motion";

export const PersonalQualities: React.FC<{
    qualities?: string[];
}> = ({ qualities = [] }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {qualities.map((quality, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--brand)] transition-all flex items-center justify-center text-center h-full"
                    >
                        <p className="font-semibold text-lg text-[var(--text)]">
                            {quality}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
