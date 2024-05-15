import { useTranslation } from "../../../i18n";
import { CredoBase } from "./CredoBase";

export const Credo = async ({ lng, title }: { lng: string; title:string }) => {
  const { t } = await useTranslation(lng, "credo");

  return <CredoBase t={t} title ={title}/>;
};
