import type { TFunction } from "i18next";
import Image from "next/image";
import hero from "@/app/assets/images/logos/medina-unesco.png";
import { SparklesCore } from "../ui/sparkles";

export const HeroBase = ({ t }: { t: TFunction<any, undefined> }) => {
  return (
    <section className="bg-dark-blue text-white flex flex-col items-center h-screen justify-center text-center">
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
      <div className="text-3xl md:text-5xl font-black mb-3 text-jci-yellow uppercase z-20 tracking-widest flex justify-end flex-col mt-36">
        <p>{t("Junior Chamber International")}</p>
        <p className="mt-2">{t("of the Médina")}</p>
      </div>

      <p className="my-8 font-semibold text-pretty text-2xl">
        {t("Taking Generation To A New Level, A Whole New Level")}
      </p>

      <div className="flex flex-row w-3/5 justify-around items-stretch z-20 max-h-40 mt-10">
        <Image src={hero} className="w-1/2 object-contain" alt="" />
      </div>
    </section>
  );
};
