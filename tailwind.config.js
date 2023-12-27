/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 1: "#0A192F" },
        textColor: { 1: "#9CA3AF" },
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
      },
    },
    screens: {
      ss: "280px",
      // ssm: "300px",
      sm: "640px",
      md: "768px",
      md1: "912px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
// 31304D
