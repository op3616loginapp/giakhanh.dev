"use client";

import { FOOTER_LINKS } from "@/config/links";
import { isProduction } from "@/lib/constants";
import Link from "@/ui/Link";
import NowPlaying from "@/ui/NowPlaying";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-4xl flex-col px-8 pb-8">
      {isProduction && <NowPlaying />}
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
      <div className="mt-20 text-sm">
        Copyright &copy; {new Date().getFullYear()} • Khanh Le - The Solution
        Team
      </div>
    </footer>
  );
};

export default Footer;
