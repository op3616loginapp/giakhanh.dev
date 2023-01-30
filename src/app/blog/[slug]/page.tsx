"use client";

import {
  IconBrandFacebook,
  IconBrandReddit,
  IconBrandTwitter,
} from "@tabler/icons-react";

import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ArticleJsonLd } from "next-seo";
import React from "react";

import { isProduction } from "@/lib/constants";
import useFormattedDate from "@/lib/hooks/useFormattedDate";

import Comment from "@/ui/Comment";
import CommentCounter from "@/ui/CommentCounter";
import LikeButton from "@/ui/LikeButton";
import Link from "@/ui/Link";
import MDXComponents from "@/ui/MDXComponents";
import TableOfContents from "@/ui/TableOfContents";
import ViewCounter from "@/ui/ViewCounter";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
};

const editURL = (slug: string) =>
  `https://github.com/op3616/giakhanh.dev/blob/main/src/content/blog/${slug}.mdx`;

const twitterShareURL = (slug: string, title: string) =>
  `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
    `http://localhost:3000/blog/${slug}`
  )}`;

const facebookShareURL = (slug: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `http://localhost:3000/blog/${slug}`
  )}`;

const redditShareURL = (slug: string, title: string) =>
  `https://www.reddit.com/submit?title=${title}&url=${encodeURIComponent(
    `http://localhost:3000/blog/${slug}`
  )}`;

const BlogPostPage = (props: BlogPostPageProps) => {
  const { slug } = props.params;

  const post = allBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const MDXComponent = useMDXComponent(post.body.code);
  const pathname = usePathname();

  const { title, summary, date, modifiedTime } = post;
  const formattedDate = useFormattedDate(date);
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  return (
    <>
      <ArticleJsonLd
        useAppDir={true}
        url={`http://localhost:3000${pathname}`}
        title={title}
        datePublished={date}
        modifiedTime={ISOModifiedTime}
        description={summary}
        authorName={{
          name: "Khanh Le",
          url: "http://localhost:3000",
        }}
        publisherLogo="http://localhost:3000/static/images/avatar.png"
        publisherName="Khanh Le"
        type="Article"
        images={[`http://localhost:3000/api/og?title=${title}&date=${date}`]}
      />
      <div>{formattedDate}</div>
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        {isProduction && (
          <>
            <ViewCounter type="POST" slug={slug} />
            <div>/</div>
            <CommentCounter />
          </>
        )}
      </div>
      <div className="mt-8 flex flex-col justify-between lg:flex-row">
        <article className="w-full lg:w-[540px]">
          <div className="prose prose-zinc w-full max-w-none dark:prose-invert">
            <MDXComponent components={MDXComponents} />
          </div>
        </article>
        <aside className="lg:min-w-[270px] lg:max-w-[270px]">
          <div className="sticky top-24">
            <TableOfContents />
            <LikeButton slug={slug} />
          </div>
        </aside>
      </div>
      <div className="my-8 flex w-full items-center justify-between border-t border-b border-accent-200 py-4">
        <Link href={editURL(slug)} className="text-sm">
          Edit on GitHub
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Link
            href={redditShareURL(slug, title)}
            icon={false}
            animation={false}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-200"
          >
            <IconBrandReddit size={18} />
          </Link>
          <Link
            href={twitterShareURL(slug, title)}
            icon={false}
            animation={false}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-200"
          >
            <IconBrandTwitter size={18} />
          </Link>
          <Link
            href={facebookShareURL(slug)}
            icon={false}
            animation={false}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-200"
          >
            <IconBrandFacebook size={18} />
          </Link>
        </div>
      </div>
      <Comment />
    </>
  );
};

export default BlogPostPage;
