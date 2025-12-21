import React from "react";
import { ContactForm } from "../components/ContactForm";

export const ContactPage: React.FC = () => {
    return (
        <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-40">
            <h2 className="text-2xl font-semibold text-[var(--brand)]">Contact</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Want to know more about me or discuss internship opportunities? Feel free
                to contact me with the form below.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                    <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
                        Contact form
                    </h3>
                    <ContactForm />
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] h-fit">
                    <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
                        Quick contact
                    </h3>
                    <div className="space-y-4 text-sm text-[var(--muted)]">
                        <div>
                            <span className="font-medium text-[var(--text)] block">Email:</span>
                            limzhiying03@gmail.com
                        </div>
                        <div>
                            <span className="font-medium text-[var(--text)] block">
                                Git Hub:
                            </span>
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
        </main>
    );
};
