"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { FolderGit2, Database, Wind, Trash2 } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  index: number;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000
    ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K`
    : count.toString();

  return (
    <span ref={ref} className="tabular-nums">
      {count >= 1000 ? formatted : count}
      {suffix}
    </span>
  );
}

function StatItem({ icon, value, suffix, label, index }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 px-6 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="text-emerald-primary">{icon}</div>
        <span className="text-3xl md:text-4xl font-bold font-heading text-foreground">
          <AnimatedCounter target={value} suffix={suffix} />
        </span>
      </div>
      <span className="text-sm text-muted-foreground font-medium">{label}</span>
    </motion.div>
  );
}

export function StatsStrip() {
  const t = useTranslations("stats");

  const stats = [
    { icon: <FolderGit2 className="h-6 w-6" />, value: 5, label: t("projects") },
    { icon: <Database className="h-6 w-6" />, value: 12000, suffix: "+", label: t("dataPoints") },
    { icon: <Wind className="h-6 w-6" />, value: 8, label: t("gasTypes") },
    { icon: <Trash2 className="h-6 w-6" />, value: 8, label: t("wasteCategories") },
  ];

  return (
    <section className="py-12 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={i} index={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
