/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10b981",
          accent: "#14b8a6",
          dark: "#0b0f17",
          card: "#111726",
          border: "#1e293b",
        }
      }
    },
  },
  plugins: [],
};
