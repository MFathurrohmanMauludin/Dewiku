import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '834px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '450px'},
      // => @media (max-width: 450px) { ... }
    },
    extend: {
      boxShadow: {
        '4xl': [
          '0 1px 36px 8px rgb(0 0 0 / 0.1)', 
          '0 4px 6px -4px rgb(0 0 0 / 0.1)'
        ]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}