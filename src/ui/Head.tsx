"use client";

import { usePathname } from "next/navigation";
import { NextSeo, NextSeoProps } from "next-seo";
import { FC } from "react";
import { getFavicon } from "@/lib/get-favicon";

type HeadProps = NextSeoProps;

const Head: FC<HeadProps> = ({
  title,
  description = "I design and code beautifully simple things, and I love what I do",
  ...props
}) => {
  const pathname = usePathname();

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <NextSeo
        useAppDir
        titleTemplate="%s - Khanh Le's Portfolio"
        title={title}
        defaultTitle="Khanh Le's Portfolio"
        description={description}
        canonical={`http://localhost:3000${pathname}`}
        twitter={{
          cardType: "summary_large_image",
          site: "@_op3616",
          handle: "@_op3616",
        }}
        openGraph={{
          url: `http://localhost:3000${pathname}`,
          type: "website",
          title: title ?? "Khanh Le's Portfolio",
          description,
          images: [
            {
              url: `http://localhost:3000/static/images/og/og.png`,
              width: 1200,
              height: 630,
              alt: "I design and code beautifully simple things, and I love what I do",
            },
          ],
        }}
        additionalLinkTags={[...getFavicon]}
        {...props}
      />
    </>
  );
};

export default Head;
