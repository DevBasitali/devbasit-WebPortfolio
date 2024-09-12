/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: 
  {
    extend: 
    {
      backgroundImage: 
      {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: 
      {
        primary: {
          DEFAULT: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#898989",
        },
        alpha: {
          DEFAULT: "#f8f8f8",
        },
        beta: {
          DEFAULT: "#e8e8e8",
        },
      },
    },
  },
  
  scrollBehavior:{
    smooth: 'smooth'

  },
  variants: {
    scrollBehavior: ['responsive'],
  },

  plugins: [],
};
