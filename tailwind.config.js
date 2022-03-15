const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-black": "var(--brand-black)",
        "brand-white": "var(--brand-white)",
      },
    },
  },
  plugins: [],
};
