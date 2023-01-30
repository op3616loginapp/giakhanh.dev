"use client";

import Link from "next/link";

import Image from "@/ui/MDXComponents/Image";
import useFormattedDate from "@/lib/hooks/useFormattedDate";
import { BlogPostCore } from "@/lib/types";
import ViewCounter from "./ViewCounter";
import LikeCounter from "./LikeCounter";

type PostCardProps = BlogPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, image, title, summary, date } = props;
  const formattedDate = useFormattedDate(date, "MMM DD, YYYY");

  return (
    <Link
      key={_id}
      href={`/blog/${slug}`}
      className="flex flex-col space-y-3 rounded-2xl border border-accent-200 p-6 transition-all duration-300 hover:scale-105 hover:bg-accent-100"
    >
      <Image
        src={`/static/images/blog/${image}`}
        width={1280}
        height={720}
        alt={title}
        rounded="rounded-lg"
      />
      <div className="flex-grow space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-accent-500">{summary}</div>
      </div>
      <div className="flex items-center text-sm">
        {formattedDate}
        &nbsp;/&nbsp;
        <LikeCounter slug={slug} />
        &nbsp;/&nbsp;
        <ViewCounter slug={slug} />
      </div>
    </Link>
  );
};

export default PostCard;
