const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(249,250,251)",
        ["ibm-black"]: "#525252",
        primary: "var(--aw-color-primary)",
        secondary: "#0095D1",
        accent: "var(--aw-color-accent)",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Open Sans", ...defaultTheme.fontFamily.serif],
      },
      textColor: {
        default: "#525252", // Change the default text color
        primary: "rgb(90 54 255)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: ["Open Sans", ...defaultTheme.fontFamily.sans],
              letterSpacing: "-0.05em", // or any desired value for tighter tracking
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
