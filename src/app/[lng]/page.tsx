import { useTranslation } from "../i18n";
import { Credo } from "./components/Credo";
import { FooterSection } from "./components/Footer";
import { HeroSection } from "./components/Hero";
import { MissionAndVisionSection } from "./components/MissionAndVision";
import { NavbarDemo } from "./components/Navbar";
import { TeamSection } from "./components/Team";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <NavbarDemo lng={lng} />
      <HeroSection lng={lng} />
      <MissionAndVisionSection lng={lng} />
      <Credo lng={lng} title={t("Credo")} />
      <TeamSection lng={lng} />
      <FooterSection lng={lng} />
    </>
  );
}
