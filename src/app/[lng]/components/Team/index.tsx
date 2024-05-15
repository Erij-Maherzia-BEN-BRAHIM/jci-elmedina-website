import { useTranslation } from "../../../i18n";
import { TeamBase } from "./TeamBase";

export const TeamSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "team");

  return <TeamBase t={t} />;
};
