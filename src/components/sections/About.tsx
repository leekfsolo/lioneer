"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Leaf, Database, Lightbulb } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { key: "sustainability", icon: Leaf, color: "text-emerald-primary" },
  { key: "openData", icon: Database, color: "text-sky-accent" },
  { key: "innovation", icon: Lightbulb, color: "text-lime-600 dark:text-lime-accent" },
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-primary rounded-full" />
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission")}
              </p>
            </div>
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading flex items-center gap-2">
                <span className="w-1.5 h-6 bg-sky-accent rounded-full" />
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("vision")}
              </p>
            </div>

            {/* Decorative illustration */}
            <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-primary/5 via-sky-accent/5 to-lime-accent/5" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 160" fill="none">
                <path d="M50 80 C100 20, 150 140, 200 80 C250 20, 300 140, 350 80" stroke="var(--emerald-primary)" strokeWidth="2" fill="none" opacity="0.5" />
                <circle cx="80" cy="60" r="20" className="fill-emerald-primary/10" />
                <circle cx="200" cy="100" r="30" className="fill-sky-accent/10" />
                <circle cx="320" cy="50" r="15" className="fill-lime-accent/10" />
                <path d="M160 30 L170 10 L180 30 L175 28 L170 35 L165 28 Z" className="fill-emerald-primary/20" />
                <path d="M280 120 L290 100 L300 120 L295 118 L290 125 L285 118 Z" className="fill-emerald-primary/20" />
              </svg>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="glass rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <CardContent className="flex gap-4 p-6">
                      <div className={`rounded-xl bg-secondary p-3 ${value.color} shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold font-heading mb-1.5">
                          {t(`values.${value.key}.title`)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`values.${value.key}.description`)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
