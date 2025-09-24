export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: [
          "Noto Color Emoji",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        primary: "#39C5BB",
        "primary-hover": "#31AAA2",
        background: "#FFFFFF",
        "on-background": "#000000ff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
