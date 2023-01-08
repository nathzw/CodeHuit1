/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    screens:{
      'sm':'320px',
      //medida de mas chico
      'md':'768px',
      //medida de mas 
      'lg':'1024px',
      //medida de mas 
      'xl':'1024px',
      //medida de mas 
      'xxl':'1536px',
      //medida de mas 

    },

    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
