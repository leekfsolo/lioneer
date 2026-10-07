"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ImpactBand() {
  const t = useTranslations("impact");

  return (
    <section
      id="impact"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-primary via-emerald-600 to-emerald-800 dark:from-emerald-900 dark:via-emerald-800 dark:to-emerald-950"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 blob" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-lime-accent/10 blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-accent/5 blob" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-emerald-50/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-emerald-700 hover:bg-emerald-50 rounded-2xl text-base px-8 shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5 font-bold"
            )}
          >
            {t("cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
