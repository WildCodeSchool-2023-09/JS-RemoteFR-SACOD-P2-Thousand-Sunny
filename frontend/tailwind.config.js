/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#001011",
      green: {
        DEFAULT: "#4B5842",
        hover: "#728465",
      },
      label: {
        DEFAULT: "#D9D9D9",
        hover: "#BBBBBB",
      },
      head: "#EBEBD3",
      back: "#E3DBCC",
    },
    extend: {
      screens: {
        tall: { raw: "(max-height: 900px)" },
      },
    },
    fontFamily: {
      amarante: ["Amarante", "serif"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
