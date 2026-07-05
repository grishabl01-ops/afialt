"use client";

import type { ElementType, ComponentPropsWithoutRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealSectionProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Wraps content in a scroll-triggered fade-up reveal. */
export function RevealSection<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: RevealSectionProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={cn("reveal", className)} {...props}>
      {children}
    </Tag>
  );
}
