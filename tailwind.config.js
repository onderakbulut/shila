module.exports = {
  prefix: 'tw-',
  content: [
    './**/*.{html,js,liquid}',
  ],
  theme: {
    extend: {
      colors: {
        'iron': '#DCDDDF',
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