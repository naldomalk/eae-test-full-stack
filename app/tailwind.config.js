/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      primary: "var(--primary)",
      black: "var(--black)",
      white: "var(--white)",
      grey: {
        10: "var(--grey-10)",
        50: "var(--grey-50)",
        100: "var(--grey-100)",
        200: "var(--grey-200)",
      },
    },
  },
  plugins: [],
};
