/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "osien-dark": "#1b1b1b",
        "bone-white": "#f0f0e6",
        "crypt-gray": "#444",
      },
      fontFamily: {
        serif: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};