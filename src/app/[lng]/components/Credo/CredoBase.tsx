import React from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import credo from "@/app/i18n/locales/en/credo.json";
import type { TFunction } from "i18next";
import { SparklesCore } from "../ui/sparkles";

interface CredoItem {
  [key: string]: string;
}

export const CredoBase = ({
  t,
  title,
}: {
  t: TFunction<any, undefined>;
  title: string;
}) => {
    const credoItems: CredoItem = credo;

  return (
    <section className="bg-dark-blue text-white flex flex-col items-center text-center">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1>{title}</h1>
      <ul className="flex flex-col gap-y-6 list-none">
        {Object.keys(credoItems).map((key) => (
          <li key={key} className="p-4 font-medium text-lg">
            <Trans i18nKey={key} t={t}>
              {credoItems[key]}
            </Trans>
          </li>
        ))}
      </ul>
    </section>
  );
};
