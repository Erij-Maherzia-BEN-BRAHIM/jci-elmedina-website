import type { TFunction } from "i18next";
import missionImage from "@/app/assets/images/mission.svg";
import visionImage from "@/app/assets/images/vision.svg";
import Image from "next/image";

export const MissionAndVisionBase = ({
  t,
}: {
  t: TFunction<any, undefined>;
}) => {
  const data = [
    {
      image: missionImage,
      title: t("Our Mission"),
      content: t(
        "Provide young leaders with leadership development opportunities by empowering them to create positive change"
      ),
    },
    {
      image: visionImage,
      title: t("Our Vision"),
      content: t("The world's leading network of young leaders"),
    },
  ];
  return (
    <section id="about" className="flex flex-col md:flex-row items-stretch justify-around gap-20">
      {data.map((d) => (
        <Card
          key={d.title}
          image={d.image}
          title={d.title}
          content={d.content}
        />
      ))}
    </section>
  );
};

function Card({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col border-jci-yellow border-2 w-full md:w-1/3 bg-white rounded-xl h-auto items-center">
      <div className="bg-jci-yellow/20 p-4 rounded-t-xl h-2/3 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          className="h-[60%] object-contain"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h1>{title}</h1>
        <span className="text-gray-600 text-center">{content}</span>
      </div>
    </div>
  );
}
