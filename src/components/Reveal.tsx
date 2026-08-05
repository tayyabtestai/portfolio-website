import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps<T extends ElementType> = {
  as?: T;
  y?: number;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (for above-the-fold content). */
  onMount?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, keyof MotionProps | "as"> &
  MotionProps;

/**
 * Fade-up reveal matching the original site's entrance animations
 * (elements start at opacity:0 / translateY(N px)).
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  y = 16,
  delay = 0,
  onMount = false,
  ...rest
}: RevealProps<T>) {
  const Component = motion(as ?? "div");
  const visible = { opacity: 1, y: 0 };
  return (
    <Component
      initial={{ opacity: 0, y }}
      {...(onMount
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    />
  );
}
