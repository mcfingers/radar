module.exports = {
  purge: {
    content: ['./src/**/*.html','./src/**/*.js']
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'azul-01': '#11325D',
        'azul-02': '#2979E1',
        'orange-01': '#FE8201'
      },
      fontFamily: {
        'body': 'Barlow'
      },
      backgroundImage: theme => ({
        'header': "url('./assets/back-header.png')",
        'form': "url('./assets/back-form.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
