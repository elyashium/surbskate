/** @type {import('tailwindcss').Config} */

import fluid, {
  extract,
  screens,
  fontSize,
  FluidThemeConfig,
} from "fluid-tailwind";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        sans: ['var(--font-bowlby-one-sc)'],
        mono: ['var(--font-dm-mono)'],
      },

      colors: {
        "brand-blue": "#4876ff",
        "brand-lime": "#d9f154",
        "brand-navy": "#2e3192",
        "brand-orange": "#ff7347",
        "brand-pink": "#f7d0e9",
        "brand-purple": "#692e54",
        "brand-gray": "#fffdf9",
      },
    },
  },
  plugins: [fluid],
};
