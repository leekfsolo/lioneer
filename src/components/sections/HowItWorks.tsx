"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Satellite, BrainCircuit, Zap } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { icon: Satellite, colorClass: "bg-sky-accent/10 text-sky-accent", titleKey: "step1Title", descKey: "step1Description" },
  { icon: BrainCircuit, colorClass: "bg-emerald-primary/10 text-emerald-primary", titleKey: "step2Title", descKey: "step2Description" },
  { icon: Zap, colorClass: "bg-lime-accent/10 text-lime-600 dark:text-lime-accent", titleKey: "step3Title", descKey: "step3Description" },
];

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number */}
                <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:ml-5 md:-top-1 w-7 h-7 rounded-full bg-emerald-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>

                <div
                  className={`rounded-2xl p-5 ${step.colorClass} mb-6 transition-transform duration-300 hover:scale-110`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {t(step.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
