/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#14110F",
        secondary: "#100E0C",
        accent: "#1D1B19",
        green: "#25BBB6"
      }
    },
  },
  plugins: [],
}

