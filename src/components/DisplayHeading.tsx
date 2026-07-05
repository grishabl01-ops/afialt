"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DisplayHeadingProps {
  /** Lines of the heading. Each line is an array of segments with a tone. */
  lines: { text: string; tone?: "ink" | "dark" | "gray" | "light" }[][];
  className?: string;
}

const toneClass = {
  ink: "text-[#0b0b0c]",
  dark: "text-[#282828]",
  gray: "text-[#979797]",
  light: "text-[#fcfcfc]",
} as const;

/** Uppercase serif display heading with per-segment two-tone coloring. */
export function DisplayHeading({ lines, className }: DisplayHeadingProps) {
  return (
    <h2 className={cn("afialt-heading", className)}>
      {lines.map((segments, i) => (
        <span key={i} className="block">
          {segments.map((seg, j) => (
            <span key={j} className={toneClass[seg.tone ?? "ink"]}>
              {seg.text}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}

/** A gray word that cycles through the given options on a timer. */
export function RotatingWord({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setFade(true);
      }, 350);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span
      className={cn(
        "text-[#979797] transition-all duration-300",
        fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        className,
      )}
    >
      {words[i]}
    </span>
  );
}
