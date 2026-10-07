"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Logo } from "@/components/shared/Logo";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "impact", href: "#impact" },
  { key: "contact", href: "#contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full glass"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex bg-emerald-primary hover:bg-emerald-light text-white rounded-2xl font-medium"
            )}
          >
            {t("exploreProjects")}
          </a>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={<Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t("menu")}
              >
                <Menu className="h-5 w-5" />
              </Button>}>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                <Logo />
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-xl transition-colors hover:text-foreground hover:bg-accent"
                    >
                      {t(link.key)}
                    </a>
                  ))}
                </nav>
                <a
                  href="#projects"
                  className={cn(
                    buttonVariants(),
                    "bg-emerald-primary hover:bg-emerald-light text-white rounded-2xl"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("exploreProjects")}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
