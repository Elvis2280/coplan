/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff',
          100: '#CCFBF7',
          200: '#99F6EF',
          300: '#5FE9E5',
          400: '#2ED3D2',
          500: '#15B7B9',
          600: '#0E8F93',
          700: '#107276',
          800: '#115A5E',
          900: '#134B4E',
        },
      },
    },
  },
  plugins: [],
};
