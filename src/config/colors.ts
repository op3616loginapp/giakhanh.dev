type Color = {
  name: string;
  className: string;
  variable: string;
  hex: {
    light: string;
    dark: string;
  };
};

export const colors: Color[] = [
  {
    name: "Background",
    className: "bg-primary",
    variable: "var(--secondary)",
    hex: {
      light: "#fff",
      dark: "#000",
    },
  },
  {
    name: "Accent 1",
    className: "bg-accent-100",
    variable: "var(--accent-100)",
    hex: {
      light: "#fafafa",
      dark: "#111",
    },
  },
  {
    name: "Accent 2",
    className: "bg-accent-200",
    variable: "var(--accent-200)",
    hex: {
      light: "#eaeaea",
      dark: "#333",
    },
  },
  {
    name: "Accent 3",
    className: "bg-accent-300",
    variable: "var(--accent-300)",
    hex: {
      light: "#999",
      dark: "#444",
    },
  },
  {
    name: "Accent 4",
    className: "bg-accent-400",
    variable: "var(--accent-400)",
    hex: {
      light: "#888",
      dark: "#666",
    },
  },
  {
    name: "Accent 5",
    className: "bg-accent-500",
    variable: "var(--accent-500)",
    hex: {
      light: "#666",
      dark: "#888",
    },
  },
  {
    name: "Accent 6",
    className: "bg-accent-600",
    variable: "var(--accent-600)",
    hex: {
      light: "#444",
      dark: "#999",
    },
  },
  {
    name: "Accent 7",
    className: "bg-accent-700",
    variable: "var(--accent-700)",
    hex: {
      light: "#333",
      dark: "#eaeaea",
    },
  },
  {
    name: "Accent 8",
    className: "bg-accent-800",
    variable: "var(--accent-800)",
    hex: {
      light: "#111",
      dark: "#fafafa",
    },
  },
  {
    name: "Foreground",
    className: "bg-secondary",
    variable: "var(--primary)",
    hex: {
      light: "#fff",
      dark: "#000",
    },
  },
];
