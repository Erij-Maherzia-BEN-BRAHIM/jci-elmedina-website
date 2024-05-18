"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../../i18n/client";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return <FooterBase t={t} />;
};
