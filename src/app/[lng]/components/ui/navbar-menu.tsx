"use client";

import Link from "next/link";


export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-jci-yellow whitespace-nowrap"
    >
      {children}
    </Link>
  );
};
