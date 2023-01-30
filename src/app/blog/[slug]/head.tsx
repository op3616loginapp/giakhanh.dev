import { FC } from "react";
import { allBlogPosts } from "contentlayer/generated";

import Head from "@/ui/Head";

type BlogPostHeadProps = {
  params: {
    slug: string;
  };
};

const BlogPostHead: FC<BlogPostHeadProps> = ({ params }) => {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  if (!post) return <Head title="404" />;

  const { title, summary, date, modifiedTime } = post;

  const ISOPublishedTime = new Date(date).toISOString();
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  return (
    <Head
      title={title}
      description={summary}
      openGraph={{
        description: summary,
        type: "article",
        title: `${title} | Khanh Le's Blog`,
        article: {
          publishedTime: ISOPublishedTime,
          modifiedTime: ISOModifiedTime,
          authors: ["http://localhost:3000"],
        },
        images: [
          {
            url: `http://localhost:3000/api/og?title=${title}&date=${date}`,
            alt: title,
            width: 1200,
            height: 630,
            type: "image/png",
          },
        ],
      }}
    />
  );
};

export default BlogPostHead;
