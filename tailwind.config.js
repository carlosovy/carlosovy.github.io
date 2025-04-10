/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-outfit)', 'sans-serif'],
        },
        colors: {
          plasma: {
            base: "#0e0e0e",
            primary: "#7f5af0",
            secondary: "#ff6ac1",
            highlight: "#2cb67d",
            text: "#eaeaea",
          }
        },
        boxShadow: {
          plasma: "0 0 30px #7f5af055",
        }
      },
    },
    plugins: [],
  }
  