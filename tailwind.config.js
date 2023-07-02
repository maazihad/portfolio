/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('/src/assets/bg/home-bg.svg')",
        'bg-project': "url('/src/assets/bg/project-bg.svg')",
        'dot-svg': "url('/src/assets/bg/dot-bg.svg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

