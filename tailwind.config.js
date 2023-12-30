/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "hsl(213, 96%, 18%)",
        secondary: "hsl(243, 100%, 62%)",
        bgColor: "hsl(217, 100%, 97%)",
      },
      backgroundImage: {
        sidebarBgImg: "url('./bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
