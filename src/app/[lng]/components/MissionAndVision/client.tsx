"use client";

import { useTranslation } from "../../../i18n/client";
import { MissionAndVisionBase } from "./MissionAndVisionBase";

export const MissionAndVision = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return <MissionAndVisionBase t={t} />;
};
