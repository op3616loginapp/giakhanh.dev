"use client";

import React from "react";

import usePostLikes from "@/lib/hooks/usePostLikes";
import Skeleton from "@/ui/Skeleton";

type LikeCounterProps = {
  slug: string;
};

const LikeCounter = (props: LikeCounterProps) => {
  const { slug } = props;

  const { likes, isLoading, isError } = usePostLikes(slug);

  return (
    <>
      {isLoading || isError ? (
        <Skeleton className="h-5 max-w-[70px]" />
      ) : (
        <div>{`${likes} likes`}</div>
      )}
    </>
  );
};

export default LikeCounter;
