/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       
        darkBlue:"#3563E9",
        black:"#1A202C",
        gray:"#90A3BF",
        background:"#F6F7F9",
        red:"#ED3F3F",
        lightBlue:"#C3D4E9",
          //  secondary:"#935b88",
          //  black:"#0B1B32",
          //  green:"#83A6CE",
      },
    },
  },
  plugins: [],
});
