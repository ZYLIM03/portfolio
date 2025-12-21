// Header.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";
import { useTheme } from "../../context/ThemeContext";
import { PORTFOLIO_INFO } from "../../config/portfolioData";

type NavLink = { href: string; label: string };

export const Header: React.FC<{ links?: NavLink[] }> = ({
  links = [],
}) => {
  const { dark, toggle } = useTheme();
  const location = useLocation();

  const PERSONAL = PORTFOLIO_INFO.personal;

  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 200], [8, 16]);
  const overlayOpacity = useTransform(scrollY, [0, 200], [0.08, 0.14]);
  const backdrop = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full border-b border-theme bg-[var(--surface)]/80 backdrop-blur-sm"
      style={{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }}
    >
      {/* animated overlay to add subtle tint regardless of theme */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: `rgba(0,0,0,1)`,
          opacity: overlayOpacity,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: brand/home */}
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-semibold text-[var(--text)]"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
            {PERSONAL.avatar ? (
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={PERSONAL.avatar}
                alt="profile"
              />
            ) : (
              PERSONAL.name?.split(" ")?.[0]?.[0]
            )}
          </div>
          <span className="sr-only">Home</span>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-[var(--brand)]">{PERSONAL.name}</div>
            <div className="text-xs text-[var(--muted)]">{PERSONAL.title}</div>
          </div>
        </Link>

        {/* Right: nav + theme */}
        <nav aria-label="Primary" className="relative flex items-center gap-3">
          <div className="relative hidden sm:flex gap-4">
            {links.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="relative px-1 py-0.5 text-sm text-[var(--text)]"
                >
                  {l.label}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[var(--brand)]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--border)]/30 transition cursor-pointer"
          >
            {dark ? <PiSunDuotone size={22} /> : <PiMoonDuotone size={22} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
