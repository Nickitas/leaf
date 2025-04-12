import React from "react";
import { Impact } from "@/views/profile/Impact";

const ecoImpact = {
  treesSaved: 12,
  co2Reduced: 150,
  plasticReduced: 8
}

export default function ImpactPage() {
  return (
    <Impact level={3} progress={10} ecoImpact={ecoImpact} />
  );
}