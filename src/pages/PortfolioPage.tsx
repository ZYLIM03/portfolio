// PortfolioPage.tsx
import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { PersonalQualities } from "../components/PersonalQualities";
import { AcademicHistory } from "../components/AcademicHistory";
import { ContactForm } from "../components/ContactForm";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";

import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
const PortfolioPage: React.FC = () => {

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#academic", label: "Academic" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-10">
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-40 pb-8"
        >
          <About personal={PORTFOLIO_INFO.personal} />
        </section>

        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">
            Projects
          </h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid projects={PORTFOLIO_INFO.projects} />
        </section>

        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

        {PORTFOLIO_INFO.personalQualities && (
          <section id="personal-qualities" className="py-8">
            <h2 className="text-2xl font-semibold text-[var(--brand)]">
              Personal Quality
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
              Attributes that define my professional approach.
            </p>
            <PersonalQualities qualities={PORTFOLIO_INFO.personalQualities} />
          </section>
        )}

        <section id="academic" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">
            Academic History
          </h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            My educational background and achievements.
          </p>
          <AcademicHistory education={PORTFOLIO_INFO.education} />
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">
            Contact
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Want to know more about me or discuss internship opportunities? Feel free to contact me with the form below.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">Contact form</h3>
              <ContactForm />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] h-fit">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">Quick contact</h3>
              <div className="space-y-4 text-sm text-[var(--muted)]">
                <div>
                  <span className="font-medium text-[var(--text)] block">Email:</span>
                  limzhiying03@gmail.com
                </div>
                <div>
                  <span className="font-medium text-[var(--text)] block">Git Hub:</span>
                  <a
                    href="https://github.com/ZYLIM03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand)] hover:underline break-all"
                  >
                    https://github.com/ZYLIM03
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />


    </ThemeProvider>
  );
};

export default PortfolioPage;
