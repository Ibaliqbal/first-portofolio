/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#38bdf8",
        dark: "#0f172a",
        red: "#ef4444",
        secondary: "#64748b",
      },
      animation: {
        naikturun: "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "-translateY(1.75rem)" },
          "50%": { transform: "translateY(1.75rem)" },
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
