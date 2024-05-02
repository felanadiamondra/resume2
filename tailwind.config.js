/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        navy_blue: '#461D50',
        dark_blue: '#2B1F65',
        blue_picton: '#32B4E1',
        // g_rose : '#F24772',
        // g_purple : '#CC4C8F',
        g_rose : ' #B35B62',
        g_purple : '#8D3B7C',

        // g_purple : '#9B4772',
        // g_rose : '#B35B62',
        // g_purple : '#964375',
       

      },
      boxShadow :{
        't-l' : '-5px -5px 5px rgba(0, 0, 0, 0.3)',
        'b-l' : '-5px 5px 5px rgba(0, 0, 0, 0.3)',
        't-r' : '5px -5px 5px rgba(0, 0, 0, 0.3)',
        'b-r' : '5px 5px 5px rgba(0, 0, 0, 0.3)',
        'psh' : 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
        'wsh' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;'
      },
      inset :{
        'one' : '0px'
      }
    },
  },
  plugins: [],
}

