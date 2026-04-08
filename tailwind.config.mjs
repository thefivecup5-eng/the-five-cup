/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Syne', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
      },
      colors: {
        bottle: '#043927',
        'bottle-light': '#065c38',
        gold: '#C9A84C',
        cream: '#F5F0E8',
      },
    },
  },
  plugins: [],
};
