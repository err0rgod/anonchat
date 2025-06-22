/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0070e0',
          600: '#0057b3',
          700: '#003d80',
          800: '#00244d',
          900: '#000b1a'
        },
        chat: {
          background: '#f4f5f7',
          sidebar: '#ffffff',
          input: '#f8f9fa'
        }
      },
      boxShadow: {
        'chat-subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'chat-hover': '0 4px 15px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}