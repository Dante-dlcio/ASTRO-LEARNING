
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage:{
        'spaceXbg':"url('./src/utils/spacex-background.jpg')"
      },
      fontFamily: {
        spacex: ['SpaceX', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
