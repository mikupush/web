/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
  	extend: {
  		
  		colors: {
  			'primary': '#39C5BB',
  			'primary-hover': '#31AAA2',
  			'background': '#FFFFFF',
  			'on-background': '#000000ff',

  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
}