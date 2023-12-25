/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 1: "#0A192F" },
        // textColor: { 1: "#ABB2BF" },
        textColor: { 1: "#9CA3AF" },
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
// 31304D
