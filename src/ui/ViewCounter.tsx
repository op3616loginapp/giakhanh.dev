"use client";

import React from "react";

import Skeleton from "@/ui/Skeleton";
import usePostViews from "@/lib/hooks/usePostViews";

type ViewCounterProps = {
  slug: string;
  type?: "GET" | "POST";
};

const ViewCounter = (props: ViewCounterProps) => {
  const { slug, type = "GET" } = props;

  const {
    views,
    isLoading,
    isError,
    increment: incrementViews,
  } = usePostViews(slug);

  React.useEffect(() => {
    if (slug && type === "POST") {
      incrementViews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, incrementViews]);

  return (
    <>
      {isLoading || isError ? (
        <Skeleton className="h-5 max-w-[70px]" />
      ) : (
        <div>{`${views} views`}</div>
      )}
    </>
  );
};

export default ViewCounter;
