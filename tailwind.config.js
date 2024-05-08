/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: "30px", max: "599px" },
      md: "600px",
      mdd:"860px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
}