"use client";

import { Locale } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Flag from "react-flagkit";

export function LocaleSwitcher() {
  const pathName = usePathname();
  const [selectedLocale, setSelectedLocale] = useState<Locale>("us");

  useEffect(() => {
    if (pathName) {
      const initialLocale = pathName.split("/")[1] as Locale;
      setSelectedLocale(initialLocale);
    }
  }, [pathName]);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const localeOptions: {
    code: Locale;
    name: string;
  }[] = [
    { code: "tn", name: "العربية" },
    { code: "us", name: "English" },
    { code: "fr", name: "Français" },
  ];

  const currentLocale = localeOptions.find(
    (locale) => locale.code === selectedLocale
  ) || { code: "us", name: "English" };

  return (
    <details className="relative">
      <summary className="flex flex-row items-center relative list-none gap-x-2 cursor-pointer">
        <p className="hover:text-jci-yellow">{currentLocale.name}</p>
        {currentLocale && (
          <Flag
            country={currentLocale.code.toUpperCase()}
            className="h-6 w-6"
          />
        )}
      </summary>

      <ul className="absolute bg-dark-blue w-32 z-40 rounded-xl divide-y border top-8">
        {localeOptions.map((locale) => (
          <li
            key={locale.name}
            className="cursor-pointer first:rounded-t-xl last:rounded-b-xl hover:bg-[rgba(0,0,0,0.3)] p-2"
          >
            <Link
              href={redirectedPathName(locale.code)}
              className="flex flex-row justify-between items-center"
              onClick={() => setSelectedLocale(locale.code)}
            >
              {locale.name}
              <Flag
                country={locale.code.toUpperCase()}
                className="h-5 w-5 object-contain"
              />
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
