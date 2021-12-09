module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        green:{
          botao: '#52bc7e'
        },

        minWidth:{
          'xs': '350px'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}