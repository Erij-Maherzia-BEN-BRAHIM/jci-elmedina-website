"use client";

import { HeroBase } from "./HeroBase";
import { useTranslation } from "../../../i18n/client";

export const Hero = ({ lng }: { lng: string; }) => {
  const { t } = useTranslation(lng, "hero");
  return <HeroBase t={t} />;
};
