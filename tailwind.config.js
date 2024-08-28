/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "redhattext": ['RedHatText'],
      },
      colors: {
        "plwc-red": "#C73B0F",
        "plwc-rose": {
          50: "#FCF8F6",
          100: "#F5EEEC",
          300: "#CAAFA7",
          400: "#AD8A85",
          500: "#87635A",
          900: "#260F08",
        },
        "plwc-green": "#1EA575",
      },
    },
  },
  plugins: [],
};
