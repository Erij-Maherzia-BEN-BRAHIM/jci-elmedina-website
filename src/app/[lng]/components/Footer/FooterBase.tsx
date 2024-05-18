import { TFunction } from "i18next";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import jci from "@/app/assets/images/logos/jci-medina.png";
import Image from "next/image";
import { Trans } from "react-i18next/TransWithoutContext";

export function FooterBase({ t }: { t: TFunction<any, undefined> }) {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow grid grid-cols-1 md:grid-cols-3 h-12 items-center">
      <div>
        <Image
          src={jci}
          className="h-10 object-contain"
          alt="logo JCI el Médina en couleurs"
        />
      </div>

      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <Trans i18nKey="footerText" t={t}>
          <a
            href="https://www.linkedin.com/in/erij-maherzia-ben-brahim-04784a112/"
            className="hover:underline"
          >
            Erij Maherzia BEN BRAHIM
          </a>
        </Trans>
      </div>

      <ul className="flex space-x-4 justify-center">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100064751044776m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <FaFacebook size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jci.elmedina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/jci-el-m%C3%A9dina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@jci.el.mdina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800"
          >
            <FaTiktok size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
