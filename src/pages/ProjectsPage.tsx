import React from "react";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { PORTFOLIO_INFO } from "../config/portfolioData";

export const ProjectsPage: React.FC = () => {
    return (
        <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-40">
            <h2 className="text-2xl font-semibold text-[var(--brand)]">Projects</h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
                Selected work — click a card for details.
            </p>
            <ProjectsGrid projects={PORTFOLIO_INFO.projects} />
        </main>
    );
};
