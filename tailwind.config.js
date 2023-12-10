module.exports = {
  prefix: 'tw-',
  content: [
    './**/*.{html,js,liquid}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    }
  },
  plugins: [],
}