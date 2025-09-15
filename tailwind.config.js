/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      keyframes: {
      blob: {
        '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
        '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
        '66%': { transform: 'translate(-15px, 10px) scale(0.95)' },
      },
    },
    animation: {
      blob: 'blob 20s ease-in-out infinite',
    
  },
      colors: {
        'bg-air': '#f0faf9',
        'aqua-primary': '#88c8b4',
        'aqua-hover': '#6db3a4',
        'teal-text': '#3c7360',
        'gray-text': '#607c79',
        'accent-greenleaf': '#a9d89b'
      }
    }
  },
  plugins: [],
}

