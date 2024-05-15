import type { TFunction } from "i18next";
import Image from "next/image";
import hero from "@/app/assets/images/logos/medina-unesco.png";
import { HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import jci from "@/app/assets/images/logos/jci-medina.png";

export const NavbarBase = ({ t , className}: { t: TFunction<any, undefined> ,className:string}) => {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",className)}
    >
      <nav className="relative rounded-full border border-white/[0.2] shadow-input flex justify-center items-center space-x-4 px-8 py-2 text-white bg-dark-blue/60 backdrop-blur-sm">
        <div className="flex flex-row space-x-4 text-sm items-center">
          <div className="flex flex-row justify-start">
            <Image
              src={jci}
              className="h-12 object-contain"
              alt="logo JCI el Médina en couleurs"
            />
          </div>
          <HoveredLink href="/#">{t("Home")}</HoveredLink>
          <HoveredLink href="/#">{t("About")}</HoveredLink>
          <HoveredLink href="/#">{t("Activities")}</HoveredLink>
          <HoveredLink href="/#">{t("Recruitment")}</HoveredLink>
          <HoveredLink href="/#">{t("Contact")}</HoveredLink>
        </div>
      </nav>
    </div>
  );
};
