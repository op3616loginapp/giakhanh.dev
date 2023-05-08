import clsx from "clsx";
import Link from "next/link";

import { SITE_METADATA } from "@/config/site-metadata";
import Twemoji from "./Twemoji";
import ProfileCard from "./ProfileCard";

const HeroSection = () => {
  return (
    <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
      <div className="space-y-2 md:my-4 md:space-y-5 md:pt-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="md:pr-8 xl:col-span-2">
          {/* Greeting */}
          <div
            className={clsx(
              "bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600",
              "mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]"
            )}
          >
            Howdy, fellow! <i className="twa twa-waving-hand"></i>
          </div>
          <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            {/* Heading */}
            <h1 className="text-neutral-900 dark:text-neutral-200">
              I&apos;m{" "}
              <span className="font-medium">{SITE_METADATA.fullName}</span> - a
              dedicated <span className="font-medium">Software Engineer</span>{" "}
              in{" "}
              <span className="hidden font-medium">Ho Chi Minh City, VN</span>
              <span className="absolute ml-2 inline-flex pt-[3px]">
                <Twemoji emoji="flag-vietnam" />
              </span>
            </h1>
            <h1 className="text-neutral-900 dark:text-neutral-200">
              This is my place for thoughts, reflections & everything in
              between.
            </h1>

            {/* Short Description */}
            <div className="mt-4 mb-8">
              <p>
                I started learning to code in 2016 and have been hooked ever
                since.
              </p>
              <p>I landed my first job as a Python coding mentor in 2017.</p>
              <p>I have a passion for JS/TS, web dev, and eCommerce.</p>
              <p>
                I started this blog to document and share my knowledge &
                experience.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col space-y-1.5">
              <Link href="/projects" className="hover:underline">
                <Twemoji emoji="hammer-and-wrench" />
                <span className="umami--click--home-link-projects ml-1.5">
                  What have I built?
                </span>
              </Link>
              <Link href="/blog" className="hover:underline">
                <Twemoji emoji="memo" />
                <span className="umami--click--home-link-blog ml-1.5">
                  My writings
                </span>
              </Link>
              <Link href="/" className="hover:underline">
                <Twemoji emoji="dna" />
                <span className="umami--click--home-link-snippets ml-1.5">
                  My snippets collection
                </span>
              </Link>
              <Link href="/about" className="hover:underline">
                <Twemoji emoji="face-with-monocle" />
                <span className="umami--click--home-link-about ml-1.5">
                  More about me and myself
                </span>
              </Link>
              <Link href="/resume" className="hover:underline">
                <Twemoji emoji="briefcase" />
                <span className="umami--click--home-link-resume ml-1.5">
                  My career
                </span>
              </Link>
              <Link
                href={SITE_METADATA.analyticsURL}
                className="hover:underline"
              >
                <Twemoji emoji="bar-chart" />
                <span className="umami--click--home-link-analytics ml-1.5">
                  Traffic & engagement of this site
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
