"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wind,
  Recycle,
  Thermometer,
  Footprints,
  Droplets,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, categoryFilters, type ProjectStatus } from "@/data/projects";

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Recycle,
  Thermometer,
  Footprints,
  Droplets,
};

function statusColor(status: ProjectStatus): string {
  switch (status) {
    case "live":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "beta":
      return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
    case "coming-soon":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
  }
}

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        {/* Filter tabs */}
        <Tabs
          value={filter}
          onValueChange={setFilter}
          className="mb-10 flex justify-center"
        >
          <TabsList className="bg-secondary/50 rounded-2xl p-1">
            {categoryFilters.map((f) => (
              <TabsTrigger
                key={f.value}
                value={f.value}
                className="rounded-xl text-sm data-[state=active]:bg-emerald-primary data-[state=active]:text-white px-4"
              >
                {t(f.key)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Icon = iconMap[project.icon] || Wind;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="group glass rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-primary/5 hover:-translate-y-1">
                    {/* Card top gradient bar */}
                    <div className="h-1.5 bg-gradient-to-r from-emerald-primary via-emerald-light to-lime-accent" />

                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-emerald-primary/10 p-2.5 text-emerald-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-lg font-bold font-heading leading-tight">
                            {t(`${project.i18nKey}.title`)}
                          </CardTitle>
                        </div>
                        <Badge
                          variant="outline"
                          className={`shrink-0 rounded-xl text-xs font-medium ${statusColor(project.status)}`}
                        >
                          {t(`status${project.status === "live" ? "Live" : project.status === "beta" ? "Beta" : "ComingSoon"}`)}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`${project.i18nKey}.description`)}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {(t.raw(`${project.i18nKey}.tags`) as string[]).map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-lg text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Learn more link */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-primary hover:text-emerald-light transition-colors group/link"
                      >
                        {t("learnMore")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
