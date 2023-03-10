/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
