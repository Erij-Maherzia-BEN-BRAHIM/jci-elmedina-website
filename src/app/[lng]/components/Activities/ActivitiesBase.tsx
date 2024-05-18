import { TFunction } from "i18next";
import { RxExternalLink } from "react-icons/rx";
export function ActivitiesBase({
  activities,
  t,
}: {
  activities: Activity[];
  t: TFunction<any, undefined>;
}) {
  return (
    <section id="activities" className="bg-dark-blue">
      <h1>{t("Activities")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-20">
        {activities.map((act) => {
          return (
            <div key={act.id} className="flex flex-col max-w-md shadow-lg">
              <div className="rounded-t-xl border">
                <img
                  src={act.image}
                  className="w-full h-52 object-cover rounded-t-xl"
                  alt={act.title}
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-b-xl p-4 backdrop-blur-3xl bg-gray-200">
                <div className="p-4 flex-1 h-28">
                  <h3 className="font-bold">{act.title}</h3>
                  <p className="text-gray-600">{act.time} </p>
                </div>
                <div className="flex justify-end">
                  <div className="relative h-12 w-1/3 overflow-hidden rounded-xl px-4 py-2 backdrop-blur-3xl">
                    <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4266b0_0%,#0d0f30_50%,#4266b0_100%)]" />
                    <div className="inline-flex h-full w-full items-center justify-center rounded-b-xl backdrop-blur-3xl">
                      <a
                        href={act.herf}
                        className="text-white flex flex-row gap-x-1 items-center"
                        target="_blank"
                      >
                        {t("See more")}
                        <RxExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
