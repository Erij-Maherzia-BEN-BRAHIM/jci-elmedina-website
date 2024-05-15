import { useTranslation } from "../../../i18n";
import { HeroBase } from "./HeroBase";

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "hero");

  return <HeroBase t={t} />;
};
