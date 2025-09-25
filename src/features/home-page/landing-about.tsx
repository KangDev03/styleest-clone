import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react"

import SectionTitle from "@/components/ui/section-title";

import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function About() {
  const containerRef = useRef(null);
  const breakpoint = useBreakpoint();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const line1Color = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.4],
    ["var(--color-primary)", "var(--color-primary)", "var(--color-muted)", "var(--color-muted)"]
  );
  const line2Color = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.4, 0.55],
    ["var(--color-muted)", "var(--color-primary)", "var(--color-primary)", "var(--color-muted)"]
  );
  const line3Color = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.7, 1],
    ["var(--color-muted)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)"]
  );

  const noAnimateColor = "var(--color-primary)";

  const getColor = (motionValue: any) => {
    if (breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl") {
      return motionValue; // animate bình thường
    }
    return noAnimateColor; // không animate, màu cố định
  };

  return (
    <section
      ref={containerRef}
      className="lg:h-[1734px] max-w-screen-xl mx-auto py-15 md:py-20 lg:py-30 px-6 md:px-15 lg:px-10"
    >
      <div className="w-full sticky top-30">
        <div>
          <SectionTitle className="text-center md:text-left lg:text-left">(About us)</SectionTitle>
        </div>

        <div className="mt-6">
          <h1 className="text-center md:text-left lg:text-left md:text-primary lg:text-muted font-bold text-2xl md:text-3.5xl lg:text-5xl leading-8.5 md:leading-11 lg:leading-17">
            <motion.span style={{ display: "inline", color: getColor(line1Color) }}>
              We believe that style is a powerful form of self-expression. Our journey began with a simple yet {" "}
            </motion.span>
            <motion.span style={{ display: "inline", color: getColor(line2Color) }}>
              profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals {" "}   
            </motion.span>
            <motion.span style={{ display: "inline", color: getColor(line3Color) }}>
              to embrace their uniqueness.
            </motion.span>
          </h1>
        </div>
      </div>
    </section>
  )
}
