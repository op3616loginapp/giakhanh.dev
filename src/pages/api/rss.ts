import type { NextApiRequest, NextApiResponse } from "next";
import RSS from "rss";

import { getAllPosts } from "@/lib/mdx";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const feed = new RSS({
    title: "Khanh Le's Portfolio",
    description: "Khanh's personal website and blog",
    site_url: "http://localhost:3000",
    feed_url: "http://localhost:3000/feed.xml",
    language: "en",
    image_url: "http://localhost:3000/static/images/og/og.png",
  });

  const allPosts = getAllPosts();

  allPosts.map((post) => {
    const { title, summary, date, slug } = post;

    feed.item({
      title: title,
      url: `http://localhost:3000/blog/${slug}`,
      date: date,
      description: summary,
      author: "Khanh Le",
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).send(feed.xml({ indent: true }));
};

export default handler;
