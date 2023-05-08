import { DropdownItem, FooterLinks } from "@/lib/types";

export const HEADER_LINKS: DropdownItem[] = [
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/about",
    text: "About",
  },
  {
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
