import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChartBar,
  IconDeviceDesktop,
  IconFlame,
  IconMessageCircle,
  IconPencil,
  IconUserCircle,
} from "@tabler/icons-react";
import { HeroLinks } from "@/ui/Hero";
import { DropdownItem, FooterLinks } from "@/lib/types";

export const HEADER_LINKS: DropdownItem[] = [
  {
    icon: <IconPencil />,
    href: "/blog",
    text: "Blog",
  },
  {
    icon: <IconMessageCircle />,
    href: "/guestbook",
    text: "Guestbook",
  },
  {
    icon: <IconChartBar />,
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <IconFlame />,
    href: "/projects",
    text: "Projects",
  },
  {
    icon: <IconUserCircle />,
    href: "/about",
    text: "About",
  },
  {
    icon: <IconDeviceDesktop />,
    href: "/uses",
    text: "Uses",
  },
];

export const FOOTER_LINKS: FooterLinks = [
  {
    links: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "/blog",
        title: "Blog",
      },
      {
        href: "/about",
        title: "About",
      },
      {
        href: "/feed.xml",
        title: "RSS",
      },
    ],
  },
  {
    links: [
      {
        href: "/guestbook",
        title: "Guestbook",
      },
      {
        href: "/uses",
        title: "Uses",
      },
      {
        href: "/projects",
        title: "Projects",
      },
    ],
  },
  {
    links: [
      {
        href: "https://www.facebook.com/op3616/",
        title: "Facebook",
      },
      {
        href: "https://www.instagram.com/op3616/",
        title: "Instagram",
      },
      {
        href: "https://github.com/op3616",
        title: "GitHub",
      },
    ],
  },
];

export const HERO_LINKS: HeroLinks = [
  {
    icon: <IconBrandGithub size={28} />,
    href: "https://github.com/op3616",
  },
  {
    icon: <IconBrandInstagram size={28} />,
    href: "https://www.instagram.com/op3616/",
  },
  {
    icon: <IconBrandFacebook size={28} />,
    href: "https://www.facebook.com/op3616/",
  },
  {
    icon: <IconBrandTwitter size={28} />,
    href: "https://twitter.com/op3616",
  },
];
