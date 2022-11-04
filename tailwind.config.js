/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
  theme: {
    extend: {
      // colors: {
      //   'accent-1': '#FAFAFA',
      //   'accent-2': '#EAEAEA',
      //   'accent-7': '#333',
      //   success: '#0070f3',
      //   cyan: '#79FFE1',
      // },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      // table, th, td: {
      //   'p-2 border border-slate-700'
      // }
      // spacing: {
      //   28: '7rem',
      // },
      // letterSpacing: {
      //   tighter: '-.04em',
      // },
      // lineHeight: {
      //   tight: 1.2,
      // },
      // fontSize: {
      //   '5xl': '2.5rem',
      //   '6xl': '2.75rem',
      //   '7xl': '4.5rem',
      //   '8xl': '6.25rem',
      // },
      // boxShadow: {
      //   small: '0 5px 10px rgba(0, 0, 0, 0.12)',
      //   medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      // },
    },
  },
}
