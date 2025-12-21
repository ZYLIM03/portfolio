import React from "react";
import { About } from "../components/About";
import { PORTFOLIO_INFO } from "../config/portfolioData";

export const HomePage: React.FC = () => {
    return (
        <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-10">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-40 pb-8">
                <About personal={PORTFOLIO_INFO.personal} />
            </section>
        </main>
    );
};
