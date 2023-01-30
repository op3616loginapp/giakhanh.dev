/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./contentlayer.config.ts"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "accent-400": "var(--accent-400)",
        "accent-500": "var(--accent-500)",
        "accent-600": "var(--accent-600)",
        "accent-700": "var(--accent-700)",
        "accent-800": "var(--accent-800)",
        "theme-100": "var(--theme-100)",
        "theme-200": "var(--theme-200)",
        "theme-300": "var(--theme-300)",
        "theme-400": "var(--theme-400)",
        "theme-500": "var(--theme-500)",
        "theme-600": "var(--theme-600)",
        "theme-700": "var(--theme-700)",
        "theme-800": "var(--theme-800)",
        "theme-900": "var(--theme-900)",
        "theme-1000": "var(--theme-1000)",
        "theme-1100": "var(--theme-1100)",
        "theme-1200": "var(--theme-1200)",
      },
      fontFamily: {
        default: ["var(--font-inter)", "var(--font-noto-sans-tc)"],
        code: [
          "var(--font-fira-code)",
          "var(--font-inter)",
          "var(--font-noto-sans-tc)",
        ],
        emoji: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
            },
            "h2, h3, h4, h5, h6": {
              position: "relative",
              scrollMarginTop: "128px",

              "& a::before": {
                content: "none !important",
              },
            },
            img: {
              margin: "24px auto",
            },
            code: {
              color: theme("colors.red.500"),
              "&::before": {
                content: `"" !important`,
              },
              "&::after": {
                content: `"" !important`,
              },
              fontWeight: "normal",
            },
            "[data-rehype-pretty-code-title]": {
              backgroundColor: "var(--accent-100)",
              border: "1px solid var(--accent-200)",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              padding: "10px 20px",
              fontSize: "14px",
            },
            "[data-rehype-pretty-code-title] ~ pre": {
              marginTop: "0",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              borderTopWidth: "0",
            },
            "[data-rehype-pretty-code-title] ~ pre ~ button": {
              top: "60px !important",
            },
            pre: {
              opacity: 0.98,
              backgroundColor: "var(--primary)",
              padding: "12px 0",
              lineHeight: 2,
              borderRadius: "8px",
              border: "1px solid var(--accent-200)",

              "[data-line-numbers]": {
                ".line::before": {
                  content: "counter(line)",
                  counterIncrement: "line",
                  display: "inline-block",
                  width: "16px",
                  marginRight: "16px",
                  textAlign: "right",
                  color: "var(--accent-400)",
                },
                ".line.highlighted::before": {
                  color: "var(--accent-600)",
                },
              },

              "> code": {
                display: "grid",
                counterReset: "line",

                ".word": {
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  padding: "4px",
                  borderRadius: "4px",
                },
                "> .line": {
                  padding: "0 20px 0 12px",
                  borderLeft: `2px solid transparent`,
                },
                "> .line.highlighted": {
                  borderLeftColor: "rgba(239, 68, 68, 0.4)",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                },
              },
            },
            ":not(pre) > code": {
              backgroundColor: "var(--primary)",
              padding: "4px",
              fontSize: "15.2px !important",
              borderRadius: "4px",
              border: "1px solid var(--accent-200)",
            },
          },
        },
        invert: {
          css: {
            code: {
              color: theme("colors.red.400"),
            },
            pre: {
              "> code": {
                ".word": {
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                },
                "> .line.highlighted": {
                  borderLeftColor: "rgba(239, 68, 68, 0.4)",
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["invert"],
  },
  plugins: [require("@tailwindcss/typography")],
};
