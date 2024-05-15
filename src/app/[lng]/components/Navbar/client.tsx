"use client";

import { NavbarBase } from "./NavbarBase";
import { useTranslation } from "../../../i18n/client";

export const Navbar = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return <NavbarBase t={t} className="" />;
};
