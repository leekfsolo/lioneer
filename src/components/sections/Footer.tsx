"use client";

import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/Logo";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold font-heading text-sm mb-3">Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("projects")}
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("about")}
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("contact")}
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold font-heading text-sm mb-3">Legal</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("privacy")}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("terms")}
              </a>
            </nav>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold font-heading text-sm">Language</h4>
            <LanguageSwitcher />
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground text-center">
          {t("copyright", { year: year.toString() })}
        </p>
      </div>
    </footer>
  );
}
