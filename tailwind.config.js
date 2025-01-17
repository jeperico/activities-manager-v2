/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sesi: "#0056b3",
      },
      spacing: {
        main: "90vw",
        mainmx: "1240px",
      },
      gridTemplateColumns: {
        header: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
