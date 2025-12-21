import React from "react";
import { AcademicHistory } from "../components/AcademicHistory";
import { PORTFOLIO_INFO } from "../config/portfolioData";

export const AcademicPage: React.FC = () => {
    return (
        <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-40">
            <h2 className="text-2xl font-semibold text-[var(--brand)]">
                Academic History
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
                My educational background and achievements.
            </p>
            <AcademicHistory education={PORTFOLIO_INFO.education} />
        </main>
    );
};
