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

  padding: {
    default: '1rem',   // default for mobile (p-4)
    sm: '1.5rem',      // small screens (sm:p-6)
    md: '2rem',        // medium screens (md:p-8)
    lg: '2.5rem',      // large screens (lg:p-10)
  },
  margin: {
    default: '1rem',   // default for mobile (m-4)
    sm: '1.5rem',      // small screens (sm:m-6)
    md: '2rem',        // medium screens (md:m-8)
    lg: '2.5rem',      // large screens (lg:m-10)
  },
  fontSize: {
    base: '1rem',      // default font size for mobile (text-base)
    sm: '1.125rem',    // small screens (sm:text-lg)
    md: '1.25rem',     // medium screens (md:text-xl)
    lg: '1.5rem',      // large screens (lg:text-2xl)
  },
  plugins: [],
};
