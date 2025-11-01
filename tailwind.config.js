module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
    "./_site/**/*.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'deater-navy': '#1a2947',
        'deater-navy-dark': '#0f1a2e',
        'deater-blue': '#0c6291',
        'deater-teal': '#0e7490',
        'deater-orange': '#f5a623',
        'deater-gray': '#f5f5f5',
        'deater-gray-dark': '#e5e7eb',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
