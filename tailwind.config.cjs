const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./admin/**/*.{html,js}", "./docs/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: "#f3f6fb",
          100: "#e1e9f5",
          200: "#b9cbed",
          300: "#86a9e2",
          400: "#4c7dd3",
          500: "#2857b4",
          600: "#1f4696",
          700: "#1a397a",
          800: "#182f62",
          900: "#17294f",
        },
        accent: {
          50: "#fef8ee",
          100: "#fde9ce",
          200: "#f9d39d",
          300: "#f4ad59",
          400: "#ef9232",
          500: "#eb7a17",
          600: "#d36311",
          700: "#aa4d11",
          800: "#843c14",
          900: "#6c3214",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 30, 60, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("current", "&.is-current, &[aria-current='page']");
    }),
  ],
};
