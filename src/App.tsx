import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/shared/Header";
import { ScrollProgressBar } from "./components/shared/ScrollProgressBar";

import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { AcademicPage } from "./pages/AcademicPage";
import { ContactPage } from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen scroll-smooth">
          <ScrollProgressBar />
          <Header
            links={[
              { href: "/", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/skills", label: "Skills" },
              { href: "/academic", label: "Academic" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
