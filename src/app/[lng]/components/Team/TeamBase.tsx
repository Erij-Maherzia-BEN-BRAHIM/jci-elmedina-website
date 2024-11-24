import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import {
  asma,
  azza,
  erij,
  firas,
  ghada,
  rihem,
  sarra,
} from "@/app/assets/images/team";
import { StaticImageData } from "next/image";
import { TFunction } from "i18next";
import clsx from "clsx";

export function TeamBase({ t }: { t: TFunction<any, undefined> }) {

  const team: { name: string; position: string; image: StaticImageData }[] = [
    {
      name: t("Asma YAHYAOUI"),
      position: t("Past President Immediat"),
      image: asma,
    },
    {
      name: t("Sarra RHOUMA"),
      position: t("President"),
      image: sarra,
    },
    {
      name: t("Firas KHELIFI"),
      position: t("Jural advisor"),
      image: firas,
    },
    {
      name: t("Azza SOUAYAH"),
      position: t("VPT"),
      image: azza,
    },
    {
      name: t("Erij Maherzia BEN BRAHIM"),
      position: t("VPSG"),
      image: erij,
    },
    {
      name: t("Rihem DAOUDI"),
      position: t("VPFD"),
      image: rihem,
    },
    {
      name: t("Ghada RIAHI"),
      position: t("VPPRE"),
      image: ghada,
    },
  ];

  return (
    <section id="bex">
      <h1>{t("Executive Board 2024")}</h1>
      <div className="flex flex-col gap-y-5">
      <div className="flex flex-col md:flex-row justify-around md:mb-14">
        {team.slice(0, 3).map((member) => (
          <div
            key={member.name}
            className={clsx(
              "border border-black/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative w-[18rem]"
            )}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black" />

            <EvervaultCard imgSrc={member.image} text={member.name} />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-dark-blue mt-4 font-bold text-lg">
                {member.name}
              </h2>
              <p className="text-sm border font-light rounded-full mt-4 text-dark-blue px-2 py-0.5 bg-jci-yellow">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        {team.slice(3).map((member) => (
          <div
            key={member.name}
            className="border border-black/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative w-[18rem]"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

            <EvervaultCard imgSrc={member.image} text={member.name} />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-dark-blue mt-4 font-bold text-lg">
                {member.name}
              </h2>
              <p className="text-sm border font-light rounded-full mt-4 text-dark-blue px-2 py-0.5 bg-jci-yellow">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div></div>
    </section>
  );
}
