import { useTranslation } from "../../../i18n";
import { FooterBase } from "./FooterBase";

export const FooterSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return <FooterBase t={t} />;
};
