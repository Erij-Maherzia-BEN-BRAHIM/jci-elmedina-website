import { useTranslation } from "@/app/i18n";
import { NavbarBase } from "./NavbarBase";

export async function NavbarDemo({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng, "navbar");

    return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarBase className="top-2" t={t} />
    </div>
  );
}


