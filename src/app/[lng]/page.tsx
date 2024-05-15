
import { useTranslation } from "../i18n";
import { Credo } from "./components/Credo";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Credo lng={lng} title={t("Credo")} />
    </>
  );
}
