/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        "background-dark": "#050505",
        "surface-dark": "#121212",
        "text-main": "#FFFFFF",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
    },
  },
  plugins: [],
};
