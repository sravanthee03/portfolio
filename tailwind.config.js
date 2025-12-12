// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e6f6ff",
          900: "#071421"
        }
      },
      boxShadow: {
        "brand-lg": "0 20px 40px rgba(2,6,23,0.25)",
      },
    },
  },
  plugins: [],
};
