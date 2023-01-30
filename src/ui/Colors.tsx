"use client";

import React from "react";
import clsx from "clsx";

import Skeleton from "@/ui/Skeleton";
import { useTheme } from "@/lib/next-themes";
import { colors } from "@/config/colors";

const Colors = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col rounded-lg border border-accent-200">
      {mounted ? (
        colors.map((color, i) => (
          <div
            key={i}
            className={clsx(
              "flex w-full justify-between p-6 [&>div]:flex-1",
              color.className,
              {
                ["rounded-t-lg"]: i === 0,
                ["rounded-b-lg"]: i === colors.length - 1,
              },
              i > 4 ? "text-primary" : "text-secondary"
            )}
          >
            <div className="font-bold">{color.name}</div>
            <div className="font-code">{color.variable}</div>
            <div className="flex justify-end uppercase">
              {color.hex[resolvedTheme]}
            </div>
          </div>
        ))
      ) : (
        <Skeleton className="h-[60vh]" />
      )}
    </div>
  );
};

export default Colors;
