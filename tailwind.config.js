/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: { max: "450px" },
      sm: { max: "650px" },
      md: { max: "850px" },
      lg: { max: "1150px" },
      xl: { min: "1151px" },
      "2xl": { min: "2000px" },
    },
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#9B4819",
        accent: "#2D5A27",
        "soft-white": "#F5F5F0",
        "soft-gray": "#E8E8E3",
        "text-light": "#4A4A4A",
      },
      fontFamily: {
        base: ["Playfair Display", "serif"],
        alt: ["Montserrat", "sans-serif"],
        title: ["Marcellus", "serif"],
      },
      letterSpacing: {
        wider: "0.04em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
        scaleIn: "scaleIn 0.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
        spin: "spin 3s linear infinite",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        texture: "url('/texture.png')",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
};
