import { useTranslation } from "../../../i18n";
import { ActivitiesBase } from "./ActivitiesBase";

export const Activities = async ({ lng, activities }: { lng: string; activities :Activity[]}) => {
  const { t } = await useTranslation(lng);

  return <ActivitiesBase t={t} activities={activities} />;
};
