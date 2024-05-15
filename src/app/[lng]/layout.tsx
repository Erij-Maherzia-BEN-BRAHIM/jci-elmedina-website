import { dir } from "i18next";
import { Hedvig_Letters_Sans } from "next/font/google";
import { languages } from "../i18n/settings";
import "../globals.css"
const pop = Hedvig_Letters_Sans({ subsets: ["latin"], weight: "400" });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}


export default function RootLayout({ children, params: { lng } }: { children: React.ReactNode, params: { lng: string } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={pop.className}>{children}</body>
    </html>
  );
}

