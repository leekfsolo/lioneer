export type ProjectStatus = "live" | "beta" | "coming-soon";
export type ProjectCategory = "air-quality" | "waste" | "climate" | "tools";

export interface Project {
  id: string;
  /** Key in messages file, e.g. "projects.airQuality" */
  i18nKey: string;
  category: ProjectCategory;
  status: ProjectStatus;
  icon: string; // lucide-react icon name
}

export const projects: Project[] = [
  {
    id: "air-quality",
    i18nKey: "airQuality",
    category: "air-quality",
    status: "live",
    icon: "Wind",
  },
  {
    id: "waste-classification",
    i18nKey: "wasteClassification",
    category: "waste",
    status: "live",
    icon: "Recycle",
  },
  {
    id: "climate-insights",
    i18nKey: "climateInsights",
    category: "climate",
    status: "beta",
    icon: "Thermometer",
  },
  {
    id: "carbon-footprint",
    i18nKey: "carbonFootprint",
    category: "tools",
    status: "coming-soon",
    icon: "Footprints",
  },
  {
    id: "water-quality",
    i18nKey: "waterQuality",
    category: "tools",
    status: "coming-soon",
    icon: "Droplets",
  },
];

export const categoryFilters: { key: string; value: ProjectCategory | "all" }[] = [
  { key: "filterAll", value: "all" },
  { key: "filterAirQuality", value: "air-quality" },
  { key: "filterWaste", value: "waste" },
  { key: "filterClimate", value: "climate" },
  { key: "filterTools", value: "tools" },
];
