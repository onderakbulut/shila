module.exports = {
  prefix: 'tw-',
  content: [
    './**/*.{html,js,liquid}',
  ],
  theme: {
    extend: {
      colors: {
        'iron': '#DCDDDF',
        'gray': '#808080',
        'gray-100': '#F2F2F2',
        'alto': '#D9D9D9',
        'romantic': '#FFD2C1',        
      },
    },
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'sm': '576px',
      'max-md': {'max': '749px'},
      'md': '750px',
      'max-lg': {'max': '989px'},      
      'lg': '990px',
      'xl': '1200px',
      'xxl': '1400px',
    }
  },
  plugins: [],
}