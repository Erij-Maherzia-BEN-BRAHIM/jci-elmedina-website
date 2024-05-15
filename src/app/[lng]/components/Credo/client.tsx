"use client";

import { CredoBase } from "./CredoBase";
import { useTranslation } from "../../../i18n/client";

export const Credo = ({ lng, title }: { lng:string; title:string }) => {
  const { t } = useTranslation(lng);
  return <CredoBase t={t}  title={title} />;
};
