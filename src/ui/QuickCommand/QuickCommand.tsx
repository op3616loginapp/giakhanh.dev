"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
  IconCode,
  IconLink,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

import { FC, PropsWithChildren } from "react";
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { toast } from "react-hot-toast";

import { useTheme } from "@/lib/next-themes";
import Results from "./Results";

const QuickCommand: FC<PropsWithChildren> = ({ children }) => {
  const { setTheme } = useTheme();

  const commandActions: Action[] = [
    {
      id: "copy-link",
      name: "Copy Link",
      keywords: "copy link",
      section: "General",
      perform: async () => {
        if (!navigator?.clipboard) {
          toast.error("Access to clipboard is rejected!");
        }

        try {
          await navigator.clipboard.writeText(window.location.href);
          toast.success(
            <div className="flex flex-col">
              <div>Copied</div>
              <div className="text-accent-5 text-sm">
                You can now share it with anyone.
              </div>
            </div>
          );
        } catch (error) {
          toast.error("Failed to copy!");
        }
      },
      icon: <IconLink />,
    },
    {
      id: "source-code",
      name: "Source code",
      keywords: "source code github",
      section: "General",
      perform: () =>
        window.open("https://github.com/op3616/giakhanh.dev", "_blank"),
      icon: <IconCode />,
    },
    {
      id: "light-mode",
      name: "Light Mode",
      keywords: "light mode",
      section: "Settings",
      perform: () => setTheme("light"),
      icon: <IconSun />,
    },
    {
      id: "dark-mode",
      name: "Dark Mode",
      keywords: "dark mode",
      section: "Settings",
      perform: () => setTheme("dark"),
      icon: <IconMoon />,
    },
    {
      id: "github",
      name: "GitHub",
      keywords: "github",
      section: "Social",
      perform: () => window.open("https://github.com/op3616", "_blank"),
      icon: <IconBrandGithub />,
    },
    {
      id: "instagram",
      name: "Instagram",
      keywords: "ig instagram",
      section: "Social",
      perform: () => window.open("https://instagram.com/op3616/", "_blank"),
      icon: <IconBrandInstagram />,
    },
    {
      id: "facebook",
      name: "Facebook",
      keywords: "fb facebook",
      section: "Social",
      perform: () => window.open("https://www.facebook.com/op3616/", "_blank"),
      icon: <IconBrandFacebook />,
    },
  ];

  return (
    <>
      <KBarProvider actions={commandActions}>
        <KBarPortal>
          <KBarPositioner className="z-50 bg-black/10 backdrop-blur">
            <KBarAnimator className="w-full max-w-lg rounded-lg border border-accent-200 bg-accent-100">
              <KBarSearch className="w-full bg-transparent py-3 px-6 outline-none" />
              <Results />
              <div className="h-4"></div>
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  );
};

export default QuickCommand;
