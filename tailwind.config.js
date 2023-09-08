/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope'],
        lora: ['Lora'],
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '834px',
      // => @media (min-width: 834px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  variants: {
    extend: {
      overflow: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [require('flowbite-typography'), require('@tailwindcss/line-clamp')],
}
