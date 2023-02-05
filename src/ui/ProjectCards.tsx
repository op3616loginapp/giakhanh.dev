"use client";

import * as TablerIcon from "@tabler/icons-react";

import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { RoughNotation } from "react-rough-notation";

const ProjectCards = () => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">
        <RoughNotation
          type="underline"
          show={true}
          color="#ADD8E6"
          animationDelay={1400}
          animationDuration={1200}
        >
          Projects{" "}
        </RoughNotation>
      </h2>
      <div className="flex flex-col gap-8">
        {allProjects.slice(0, 3).map((project: any) => {
          const { _id, iconName, name, description, slug } = project;
          const Icon: React.FC<TablerIcon.TablerIconsProps> =
            TablerIcon[iconName];

          return (
            <Link
              key={_id}
              href={`/projects/${slug}`}
              className="flex w-full flex-1 items-center justify-start rounded-lg border border-accent-200 p-4 transition-all duration-300 hover:scale-105 hover:border-secondary sm:px-6"
            >
              <Icon />
              <div className="flex-1 px-4">
                <div>{name}</div>
                <p>{description}</p>
              </div>
              <TablerIcon.IconChevronRight />
            </Link>
          );
        })}
      </div>
      <div className="flex">
        <Link
          href="/projects"
          className="group my-8 flex items-center gap-4 text-lg font-medium"
        >
          <span>View All Projects</span>
          <TablerIcon.IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
