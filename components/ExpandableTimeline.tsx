"use client";

import { useState, ReactNode } from "react";

export interface TimelineItem {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  details?: string[];
  accent?: boolean;
  link?: { label: string; href: string };
}

interface ExpandableTimelineProps {
  items: TimelineItem[];
}

export default function ExpandableTimeline({ items }: ExpandableTimelineProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  return (
    <ol className="relative">
      {/* svislá čára s gradientem */}
      <div
        aria-hidden
        className="absolute left-[5px] top-3 bottom-3 w-px"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-accent-line), rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.04) 70%, transparent)",
        }}
      />

      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li key={item.company + i} className="relative pl-8 sm:pl-10">
            {/* puntík */}
            <span
              aria-hidden
              className="absolute left-0 top-7 flex h-3 w-3 items-center justify-center"
            >
              <span
                className={`absolute h-3 w-3 rounded-full transition-all duration-500 ${
                  isOpen
                    ? "bg-[var(--color-accent)]/30 scale-100"
                    : "bg-white/10 scale-75"
                }`}
              />
              <span
                className={`relative h-1.5 w-1.5 rounded-full ring-4 ring-[#0a0a0b] transition-colors duration-500 ${
                  isOpen ? "bg-[var(--color-accent)]" : "bg-neutral-500"
                }`}
              />
            </span>

            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group block w-full border-t border-white/[0.05] py-5 text-left transition-colors hover:bg-white/[0.015] sm:py-7"
              aria-expanded={isOpen}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {item.period}
                  </span>
                  {item.accent && (
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:ml-0 sm:mt-1 sm:block">
                      · current
                    </span>
                  )}
                </div>

                <div className="sm:col-span-9">
                  <h3 className="font-display text-[1.75rem] leading-tight text-white sm:text-3xl lg:text-4xl">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">{item.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>

                <div className="hidden items-start justify-end sm:col-span-1 sm:flex">
                  <span
                    aria-hidden
                    className={`mt-2 inline-block text-neutral-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* expandable detail */}
              <div
                className="grid transition-all duration-500 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-6">
                    <div className="hidden sm:col-span-2 sm:block" />
                    <div className="sm:col-span-9">
                      {item.details && item.details.length > 0 && (
                        <ul className="space-y-2.5 border-l border-white/[0.06] pl-4">
                          {item.details.map((d, di) => (
                            <li
                              key={di}
                              className="text-sm leading-relaxed text-neutral-400"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-300 transition-colors hover:border-[var(--color-accent-line)] hover:bg-[var(--color-accent-soft)] hover:text-white"
                        >
                          {item.link.label}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <path d="M7 7h10v10M7 17 17 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="hidden text-right sm:col-span-1 sm:block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        );
      })}
      <li className="border-t border-white/[0.05]" aria-hidden />
    </ol>
  );
}
