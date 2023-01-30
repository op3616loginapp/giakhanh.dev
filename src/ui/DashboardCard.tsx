"use client";

import CountUp from "react-countup";

import Link from "@/ui/Link";
import Skeleton from "@/ui/Skeleton";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
  data: number;
};

const Card = ({ icon, title, href, data }: CardProps) => {
  return (
    <Link
      href={href}
      icon={false}
      animation={false}
      className="flex flex-col gap-2 rounded-lg border border-accent-200 p-4 transition-colors duration-300 hover:bg-accent-100"
    >
      <div className="flex items-center gap-1">
        {icon}
        <div className="text-sm font-bold">{title}</div>
      </div>
      {data > 0 ? (
        <div className="text-4xl font-black text-secondary">
          <CountUp start={0} end={data} separator="," />
        </div>
      ) : (
        <Skeleton className="h-10 w-1/3" />
      )}
    </Link>
  );
};

export default Card;
