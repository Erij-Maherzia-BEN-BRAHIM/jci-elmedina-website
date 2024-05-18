import type { TFunction } from "i18next";
import Image from "next/image";
import { HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import jci from "@/app/assets/images/logos/jci-medina.png";
import {LocaleSwitcher} from "@/app/[lng]/components/LocaleSwitcher"

export const NavbarBase = ({ t , className}: { t: TFunction<any, undefined> ,className:string}) => {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <nav className="relative rounded-full border border-white/[0.2] shadow-input flex justify-center gap-x-4 items-center px-8 py-2 text-white bg-dark-blue/60 backdrop-blur-sm">
        <div className="flex flex-row gap-x-2.5 text-sm items-center">
          <div className="flex flex-row justify-start">
            <Image
              src={jci}
              className="w-[6rem] object-contain"
              alt="logo JCI el Médina en couleurs"
            />
          </div>
          <HoveredLink href="/#">{t("Home")}</HoveredLink>
          <HoveredLink href="/#">{t("About")}</HoveredLink>
          <HoveredLink href="/#">{t("Activities")}</HoveredLink>
          <HoveredLink href="/#">{t("Recruitment")}</HoveredLink>
          <HoveredLink href="/#">{t("Contact")}</HoveredLink>
          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  );
};
