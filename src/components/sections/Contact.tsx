"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Globe, MessageCircle, Link2 } from "lucide-react";
import { toast } from "sonner";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function useContactSchema() {
  const t = useTranslations("contact.errors");

  return z.object({
    name: z.string().min(1, t("nameRequired")),
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    message: z.string().min(1, t("messageRequired")).min(10, t("messageMin")),
  });
}

type ContactFormData = z.infer<ReturnType<typeof useContactSchema>>;

const socialLinks = [
  { icon: Globe, href: "https://github.com", label: "GitHub" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Twitter" },
  { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Contact() {
  const t = useTranslations("contact");
  const schema = useContactSchema();
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(_data: ContactFormData) {
    setSending(true);
    // Mock network delay
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    reset();
    toast.success(t("successTitle"), {
      description: t("successMessage"),
    });
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="glass rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("nameLabel")}
                    </label>
                    <Input
                      id="contact-name"
                      placeholder={t("namePlaceholder")}
                      className="rounded-xl"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("emailLabel")}
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="rounded-xl"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("messageLabel")}
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder={t("messagePlaceholder")}
                      rows={5}
                      className="rounded-xl resize-none"
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-emerald-primary hover:bg-emerald-light text-white rounded-2xl font-medium shadow-lg shadow-emerald-primary/20"
                  >
                    {sending ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t("sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="font-bold font-heading text-lg">Connect</h3>
              <Separator />
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="rounded-xl bg-secondary p-3 text-muted-foreground hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-200"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                info@lioneer.dev
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
