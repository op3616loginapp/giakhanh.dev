import { IconBrandGithub, IconPencil } from "@tabler/icons-react";

import { BASE_URL, isProduction } from "@/lib/constants";
import Card from "@/ui/DashboardCard";

type Data = {
  github: {
    followers: number;
    stars: number;
  };
  youtube: {
    subscribers: number;
    views: number;
  };
  blog: {
    views: number;
  };
};

const getData = async () => {
  const github = await (
    await fetch(`${BASE_URL}/api/github`, {
      cache: "no-store",
    })
  ).json();

  const blog = await (
    await fetch(`${BASE_URL}/api/views`, {
      cache: "no-store",
    })
  ).json();

  return { github, blog };
};

const DashboardPage = async () => {
  const { github, blog } = (await getData()) as Data;

  return (
    <>
      <h2 className="my-4 text-4xl font-bold">Dashboard</h2>
      <p className="text-accent-5 mb-8">
        This is my personal dashboard, built with Next.js API routes deployed as
        serverless functions. I use this dashboard to track various metrics
        across platforms like GitHub, and more.
      </p>
      {isProduction && (
        <>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <Card
              icon={<IconBrandGithub />}
              title="GitHub followers"
              href="https://github.com/op3616"
              data={github.followers}
            />
            <Card
              icon={<IconBrandGithub />}
              title="GitHub stars"
              href="https://github.com/op3616"
              data={github.stars}
            />
          </div>
          <Card
            icon={<IconPencil />}
            title="Blog total views"
            href={process.env.BASE_URL}
            data={blog.views}
          />
        </>
      )}
    </>
  );
};

export default DashboardPage;
