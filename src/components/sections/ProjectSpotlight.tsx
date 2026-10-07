"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Wind, Trash2, AlertTriangle, Leaf, Info, Recycle as RecycleIcon } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const gasKeys = ["co2", "ch4", "no2", "so2", "o3"] as const;
const wasteKeys = ["plasticBottle", "banana", "battery", "newspaper", "glassJar"] as const;

function levelColor(level: string): string {
  const l = level.toLowerCase();
  if (l.includes("hazard") || l.includes("nguy hiểm")) return "bg-red-500/10 text-red-600 dark:text-red-400";
  if (l.includes("unhealthy") || l.includes("không lành")) return "bg-orange-500/10 text-orange-600 dark:text-orange-400";
  return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
}

function binColorDot(color: string): string {
  const c = color.toLowerCase();
  if (c === "yellow" || c === "vàng") return "bg-yellow-400";
  if (c === "green" || c.includes("xanh lá")) return "bg-green-500";
  if (c === "red" || c.includes("đỏ")) return "bg-red-500";
  if (c === "blue" || c.includes("xanh dương")) return "bg-blue-500";
  if (c === "white" || c.includes("trắng")) return "bg-gray-200 border border-gray-400";
  return "bg-gray-400";
}

export function ProjectSpotlight() {
  const t = useTranslations("spotlight");
  const tGas = useTranslations("gasData");
  const tWaste = useTranslations("wasteData");

  const [selectedGas, setSelectedGas] = useState<string>(gasKeys[0]);
  const [selectedWaste, setSelectedWaste] = useState<string>(wasteKeys[0]);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <Tabs defaultValue="gas" className="max-w-3xl mx-auto">
          <TabsList className="w-full bg-secondary/50 rounded-2xl p-1 mb-8">
            <TabsTrigger
              value="gas"
              className="flex-1 rounded-xl data-[state=active]:bg-emerald-primary data-[state=active]:text-white gap-2"
            >
              <Wind className="h-4 w-4" />
              {t("gasTab")}
            </TabsTrigger>
            <TabsTrigger
              value="waste"
              className="flex-1 rounded-xl data-[state=active]:bg-emerald-primary data-[state=active]:text-white gap-2"
            >
              <Trash2 className="h-4 w-4" />
              {t("wasteTab")}
            </TabsTrigger>
          </TabsList>

          {/* Gas Classification */}
          <TabsContent value="gas">
            <Card className="glass rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 font-medium">{t("gasSelectLabel")}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {gasKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedGas(key)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                        selectedGas === key
                          ? "bg-emerald-primary text-white shadow-md"
                          : "bg-secondary hover:bg-accent text-muted-foreground"
                      }`}
                    >
                      {tGas(`${key}.name`).split(" — ")[0]}
                    </button>
                  ))}
                </div>

                <motion.div
                  key={selectedGas}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold font-heading">{tGas(`${selectedGas}.name`)}</h3>
                    <Badge className={levelColor(tGas(`${selectedGas}.level`))}>
                      {tGas(`${selectedGas}.level`)}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="grid gap-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("type")}</p>
                        <p className="text-foreground">{tGas(`${selectedGas}.type`)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Info className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("source")}</p>
                        <p className="text-foreground">{tGas(`${selectedGas}.source`)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Leaf className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("impact")}</p>
                        <p className="text-foreground">{tGas(`${selectedGas}.impact`)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Waste Classification */}
          <TabsContent value="waste">
            <Card className="glass rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 font-medium">{t("wasteSelectLabel")}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {wasteKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedWaste(key)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                        selectedWaste === key
                          ? "bg-emerald-primary text-white shadow-md"
                          : "bg-secondary hover:bg-accent text-muted-foreground"
                      }`}
                    >
                      {tWaste(`${key}.name`)}
                    </button>
                  ))}
                </div>

                <motion.div
                  key={selectedWaste}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold font-heading">{tWaste(`${selectedWaste}.name`)}</h3>
                  </div>

                  <Separator />

                  <div className="grid gap-4">
                    <div className="flex gap-3">
                      <RecycleIcon className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("category")}</p>
                        <p className="text-foreground">{tWaste(`${selectedWaste}.category`)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className={`h-5 w-5 rounded-full shrink-0 mt-0.5 ${binColorDot(tWaste(`${selectedWaste}.binColor`))}`} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("binColor")}</p>
                        <p className="text-foreground">{tWaste(`${selectedWaste}.binColor`)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Info className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("disposalTip")}</p>
                        <p className="text-foreground">{tWaste(`${selectedWaste}.tip`)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Leaf className="h-5 w-5 text-emerald-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{t("recyclable")}</p>
                        <p className="text-foreground font-medium">{tWaste(`${selectedWaste}.recyclable`)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
