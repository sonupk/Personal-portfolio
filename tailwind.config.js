/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        backgroundWhite:'var(--color-white)',
        black:"var(--color-black)",
        primaryOrange:"var(--color-orange)",
        assh:"var(--color-assh)",
        dullBlack:"var(--color-dullBlack)"
       },
       borderRadius:{
      'sectionBorderRadius':'16px',
      'buttonBorderRadius':'25px'
     },
     boxShadow: {
      'custom': '0px 7px 29px 0px #64646f33',
      'main':'0px 7px 29px 0px #64646f33'
    },

    },
    screens:{
      'sm': '300px',
      'md': '500px',
      'lg': '648px',
    },
   
  },
  plugins: [],
}