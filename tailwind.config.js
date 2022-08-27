/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'coffee': ['Oswald', 'sans-serif'],
      'heroheading': ['Roboto', 'sans-serif'],
      'darkage': ['Roboto Mono', 'monospace'],
    },

    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),
            require('tw-elements/dist/plugin')],
}
