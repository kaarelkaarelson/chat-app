/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        // "2xl": { max: "1535px" },
        // // => @media (max-width: 1535px) { ... }

        // xl: { max: "1279px" },
        // // => @media (max-width: 1279px) { ... }

        // lg: { max: "1023px" },
        // // => @media (max-width: 1023px) { ... }

        // md: { max: "767px" },
        // // => @media (max-width: 767px) { ... }

        // sm: { max: "639px" },
        // // => @media (max-width: 639px) { ... }
      },
  
      margin: {
        "20%": "20%",
      },
      spacing: {
        "20%": "20%",
      },
      colors: {
        primary: "#42E2B8",
        secondary: "#F3DFBF",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        gray: "#8492a6",
      },
    },
  },
  // plugins: [],
};
