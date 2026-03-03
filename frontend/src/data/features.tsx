import type { IFeature } from "../types";
import { Zap, ThumbsUp, Layers } from "lucide-react";

export const featuresData: IFeature[] = [
  {
    icon: Zap,
    title: "Smart AI Analysis",
    description:
      "Our AI analyzes your video topic and suggests high-converting thumbnail concepts instantly.",
  },
  {
    icon: ThumbsUp,
    title: "Scroll-Stopping Designs",
    description:
      "Generate bold, high-contrast thumbnails engineered to stand out in crowded feeds.",
    highlight: true, // optional for premium styling
  },
  {
    icon: Layers,
    title: "Fully Customizable",
    description:
      "Edit text, colors, and layouts effortlessly to match your brand perfectly.",
  },
];