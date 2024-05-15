"use client";

import { useTranslation } from "../../../i18n/client";
import { TeamBase } from "./TeamBase";

export const Team = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "team");
  return <TeamBase t={t} />;
};
