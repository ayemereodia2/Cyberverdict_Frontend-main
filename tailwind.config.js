/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        "homeBg": "#F7F7F7",
        "primaryColor": "#1935CA"
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
};
