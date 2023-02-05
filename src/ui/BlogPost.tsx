"use client";

import { IconArrowRight } from "@tabler/icons-react";

import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

import PostCard from "@/ui/PostCard";
import { BlogPostCore } from "@/lib/types";

type BlogPostsProps = {
  posts: BlogPostCore[];
};

const BlogPosts = (props: BlogPostsProps) => {
  const { posts } = props;

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">
        <RoughNotation
          type="underline"
          show={true}
          color="#fff176"
          animationDelay={800}
          animationDuration={1200}
        >
          Recent Posts{" "}
        </RoughNotation>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      <div className="flex">
        <Link
          href="/blog"
          className="group my-8 flex items-center gap-4 text-lg font-medium"
        >
          <span>View All Posts</span>
          <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};

export default BlogPosts;
