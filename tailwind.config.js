/** @type {import('tailwindcss').Config} */
const fluid = require('fluid-tailwind');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bowlby-one-sc)'],
        mono: ['var(--font-dm-mono)'],
      },
    },
  },
  plugins: [fluid],
};
