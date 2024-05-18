import { useTranslation } from "../../../i18n";
import { MissionAndVisionBase } from "./MissionAndVisionBase";

export const MissionAndVisionSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return <MissionAndVisionBase t={t} />;
};
