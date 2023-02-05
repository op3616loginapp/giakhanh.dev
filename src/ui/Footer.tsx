"use client";

import { FOOTER_LINKS } from "@/config/links";
import { SITE_METADATA } from "@/config/site-metadata";
import Link from "@/ui/Link";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col px-8 pb-8">
      {SITE_METADATA.enableFooterLink && (
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
          {FOOTER_LINKS.map((list, i) => (
            <div key={i} className="mb-10 flex flex-col items-start gap-4 pr-4">
              {list.links.map((link, j) => (
                <Link
                  key={j}
                  href={link.href}
                  className="text-accent-500 transition-colors duration-300 hover:text-secondary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 items-center justify-between space-y-4 md:flex md:space-y-0">
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>{SITE_METADATA.footerTitle}</span>
        </div>
        <div></div>
        <div className="flex items-center space-x-1">
          <Link
            href={SITE_METADATA.siteRepo}
            className="text-gray-500 dark:text-gray-400"
          >
            <span className="umami--click--view-source">View source</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
