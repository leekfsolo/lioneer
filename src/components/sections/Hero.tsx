"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FloatingLeaf({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ delay, duration: 1.2 }}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 8C8 10 5.9 16.2 3.9 19.9C3.5 20.6 4.2 21.3 4.9 20.9C6.5 19.9 9 18 12 17C15 16 18 15 20 12C22 9 20 4 17 8Z"
        className="fill-emerald-light/40 dark:fill-emerald-light/20"
      />
    </motion.svg>
  );
}

function FloatingCloud({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ delay, duration: 1.5 }}
      className={className}
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="32" cy="22" rx="28" ry="10" className="fill-sky-accent/20 dark:fill-sky-accent/10" />
      <ellipse cx="22" cy="16" rx="14" ry="10" className="fill-sky-accent/15 dark:fill-sky-accent/8" />
      <ellipse cx="42" cy="14" rx="16" ry="12" className="fill-sky-accent/20 dark:fill-sky-accent/10" />
    </motion.svg>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden gradient-mesh min-h-[85vh] flex items-center">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-primary/10 blob animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-accent/10 blob animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-lime-accent/10 blob animate-float" />

        {/* Floating leaves */}
        <FloatingLeaf className="absolute top-[15%] left-[10%] animate-float" delay={0.2} />
        <FloatingLeaf className="absolute top-[25%] right-[15%] animate-float-delayed scale-150" delay={0.5} />
        <FloatingLeaf className="absolute bottom-[30%] left-[20%] animate-float scale-75" delay={0.8} />
        <FloatingLeaf className="absolute top-[60%] right-[25%] animate-float-delayed scale-125" delay={1.0} />
        <FloatingLeaf className="absolute top-[10%] right-[40%] animate-float scale-50" delay={0.3} />

        {/* Floating clouds */}
        <FloatingCloud className="absolute top-[12%] right-[8%] animate-float-delayed" delay={0.4} />
        <FloatingCloud className="absolute top-[30%] left-[5%] animate-float scale-75" delay={0.7} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground leading-tight"
          >
            {t("title").split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  word.toLowerCase() === "greener" || word.toLowerCase() === "xanh"
                    ? "text-emerald-primary"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-emerald-primary hover:bg-emerald-light text-white rounded-2xl text-base px-8 shadow-lg shadow-emerald-primary/25 hover:shadow-emerald-light/30 transition-all hover:-translate-y-0.5"
              )}
            >
              {t("cta1")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-2xl text-base px-8 border-emerald-primary/30 hover:bg-emerald-primary/5 transition-all hover:-translate-y-0.5"
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t("cta2")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
