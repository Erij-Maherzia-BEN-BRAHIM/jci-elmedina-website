import { useTranslation } from "../i18n";
import { Activities } from "./components/Activities";
import { Credo } from "./components/Credo";
import { FooterSection } from "./components/Footer";
import { HeroSection } from "./components/Hero";
import { MissionAndVisionSection } from "./components/MissionAndVision";
import { NavbarDemo } from "./components/Navbar";
import { TeamSection } from "./components/Team";

async function getData() {
  const res = await fetch(
    "https://api.jci.cc/api/getWebsiteProjectList?type=2"
  );

  if (!res.ok) {
    console.error("Failed to fetch activities",res)
  }

  return res.json();
}

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  const data = await getData();

  return (
    <>
      <NavbarDemo lng={lng} />
      <HeroSection lng={lng} />
      <MissionAndVisionSection lng={lng} />
      <Credo lng={lng} title={t("Credo")} />
      <TeamSection lng={lng} />
      <Activities lng={lng} activities={data?.data?.list} />
      <FooterSection lng={lng} />
    </>
  );
}
