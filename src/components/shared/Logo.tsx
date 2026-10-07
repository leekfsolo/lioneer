"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className, size = 32, showText = true }: LogoProps) {
  return (
    <a href="#" className={cn("flex items-center gap-2 group", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {/* Leaf shape */}
        <path
          d="M24 4C14 4 6 14 6 24c0 8 4 14 10 17l2-3c-4-2-7-7-7-13 0-9 6-16 13-19v38h2V8c7 3 13 10 13 19 0 6-3 11-7 13l2 3c6-3 10-9 10-17C44 14 34 4 24 4z"
          className="fill-emerald-primary"
        />
        {/* Lion mane / crown detail */}
        <path
          d="M24 12c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2zm-5 6c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2zm10 0c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
          className="fill-lime-accent"
        />
        {/* Center dot */}
        <circle cx="24" cy="26" r="3" className="fill-emerald-light" />
      </svg>
      {showText && (
        <span className="text-xl font-bold font-heading tracking-tight text-foreground">
          Lioneer
        </span>
      )}
    </a>
  );
}
