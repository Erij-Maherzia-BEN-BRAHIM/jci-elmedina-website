"use client";

import { ActivitiesBase } from "./ActivitiesBase";
import { useTranslation } from "../../../i18n/client";

export const ActivitiesSection = ({
  lng,
  activities,
}: {
  lng: string;
  activities:Activity[];
}) => {
  const { t } = useTranslation(lng);
  return <ActivitiesBase t={t} activities={activities} />;
};
