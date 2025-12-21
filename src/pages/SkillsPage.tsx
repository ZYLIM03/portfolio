import React from "react";
import { SkillsList } from "../components/SkillsList";
import { PersonalQualities } from "../components/PersonalQualities";
import { PORTFOLIO_INFO } from "../config/portfolioData";

export const SkillsPage: React.FC = () => {
    return (
        <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-40">
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Tools and technologies I use regularly.
                </p>
                <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
            </section>

            {PORTFOLIO_INFO.personalQualities && (
                <section>
                    <h2 className="text-2xl font-semibold text-[var(--brand)]">
                        Personal Quality
                    </h2>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Attributes that define my professional approach.
                    </p>
                    <PersonalQualities qualities={PORTFOLIO_INFO.personalQualities} />
                </section>
            )}
        </main>
    );
};
