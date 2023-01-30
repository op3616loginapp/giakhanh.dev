import mergeClasses from "@/lib/merge-classes";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={mergeClasses(
        "h-4 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800",
        className
      )}
    />
  );
};

export default Skeleton;
