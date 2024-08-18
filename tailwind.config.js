/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobilesidebar: "url(src/assets/images/bg-sidebar-mobile.svg)",
        desktopsidebar: "url(src/assets/images/bg-sidebar-desktop.svg)",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
