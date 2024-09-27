/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#6d28d9",
        secondary: "#FC4747",
        "gray-dark": "#10141E",
        "gray-transparent": "#0000006a",
        gray: "#161D2F",
        white: "#eef2ff",
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },

      fontSize: {
        "heading-l": "32px",
        "heading-m": "24px",
        "heading-s": "24px",
        "heading-xs": "18px",
        "body-m": "15px",
        "body-s": "13px",
      },

      fontWeight: {
        light: 300,
        medium: 500,
      },

      screens: {
        xs: "400px",
      },

      width: {
        100: "25rem",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".caret-primary": {
          "caret-color": "#432490",
        },
        ".caret-secondary": {
          "caret-color": "#FC4747",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
