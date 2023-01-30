import { allPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "@/ui/MDXComponents";

const getPage = () => {
  const page = allPages.find((page) => page.slug === "about");

  return page;
};

const AboutPage = () => {
  const page = getPage();
  const MDXComponent = useMDXComponent(page.body.code);

  return (
    <>
      <h2 className="my-4 text-4xl font-bold">About</h2>
      <p className="mb-8 text-accent-500">👋 Hi there! I am Khanh Le.</p>
      <div className="prose prose-zinc w-full max-w-none dark:prose-invert">
        <MDXComponent components={MDXComponents} />
      </div>
    </>
  );
};

export default AboutPage;
