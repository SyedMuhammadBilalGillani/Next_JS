/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        background_light: "#EEEEEE",
        background_dark: "#1F1F1F",
        text_s: "#C0C0C0",
        text_g: "#28E98C",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.5xl'),
          color: theme('colors.color') // Adjust color as needed
        },
        'h2': {
          fontSize: theme('fontSize.4xl'),
          color: theme('colors.color') // Adjust color as needed
        },
        'h3': {
          fontSize: theme('fontSize.3xl'),
          color: theme('colors.color') // Adjust color as needed
        },
        'h4': {
          fontSize: theme('fontSize.2xl'),
          color: theme('colors.color') // Adjust color as needed
        },
        'h5': {
          fontSize: theme('fontSize.xl'),
          color: theme('colors.color') // Adjust color as needed
        },
        'h6': {
          fontSize: theme('fontSize.lg'),
          color: theme('colors.color') // Adjust color as needed
        },
      });
    }
  ],
};
