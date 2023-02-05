import { GiscusProps } from "@giscus/react";

export const GISCUS_CONFIG: GiscusProps = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO as any,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: "pathname",
  reactionsEnabled: "1",
  emitMetadata: "1",
  inputPosition: "bottom",
  lang: "en",
  loading: "eager",
};
