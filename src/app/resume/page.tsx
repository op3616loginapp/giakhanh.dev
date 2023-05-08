import { allPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "@/ui/MDXComponents";

const getPage = () => {
  const page = allPages.find((page) => page.slug === "resume");

  return page;
};

const UsesPage = () => {
  const page = getPage();
  const MDXComponent = useMDXComponent(page.body.code);

  return (
    <>
      <h2 className="my-4 text-4xl font-bold">Resume</h2>
      <p className="mb-8 text-accent-500">
        My professional career, experience, and skills.
      </p>
      <section aria-labelledby="profile-overview-title">
        <div className="mb-8 overflow-hidden rounded-lg bg-primary">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                    src="/static/images/avatar-profile.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-4 flex flex-col justify-center text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-xl font-bold text-secondary sm:text-2xl">
                    Khanh Le
                  </p>
                  <p className="text-sm font-medium text-accent-500">
                    Software Developer
                  </p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="prose prose-zinc w-full max-w-none dark:prose-invert">
        <MDXComponent components={MDXComponents} />
      </div>
    </>
  );
};

export default UsesPage;
